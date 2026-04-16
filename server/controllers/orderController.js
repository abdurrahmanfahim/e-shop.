import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const placeOrder = async (req, res, next) => {
  try {
    const { billing, shipping, payment, coupon } = req.body;
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'title price');
    if (!cart?.items?.length) return res.status(400).json({ message: 'Cart is empty' });

    const items = cart.items.map(i => ({ product: i.product._id, title: i.product.title, quantity: i.quantity, price: i.price, variant: i.variant }));
    const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
    const shippingCost = { standard: 9.99, express: 19.99, overnight: 39.99 }[shipping?.method] ?? 9.99;
    const total = subtotal + shippingCost;

    const order = await Order.create({ user: req.user._id, items, billing, shipping: { ...shipping, cost: shippingCost }, payment, coupon, subtotal, total });
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.status(201).json(order);
  } catch (err) { next(err); }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) { next(err); }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) { next(err); }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) { next(err); }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) { next(err); }
};
