import Cart from '../models/Cart.js';

const getOrCreate = (userId) => Cart.findOneAndUpdate({ user: userId }, {}, { upsert: true, new: true });

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'title thumbnail price');
    res.json(cart || { items: [] });
  } catch (err) { next(err); }
};

export const addItem = async (req, res, next) => {
  try {
    const { product, quantity = 1, variant, price } = req.body;
    const cart = await getOrCreate(req.user._id);
    const idx = cart.items.findIndex(i => i.product.toString() === product && i.variant === variant);
    if (idx > -1) cart.items[idx].quantity += quantity;
    else cart.items.push({ product, quantity, variant, price });
    await cart.save();
    res.json(cart);
  } catch (err) { next(err); }
};

export const updateItem = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    item.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (err) { next(err); }
};

export const removeItem = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.items = cart.items.filter(i => i._id.toString() !== req.params.itemId);
    await cart.save();
    res.json(cart);
  } catch (err) { next(err); }
};

export const clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.json({ message: 'Cart cleared' });
  } catch (err) { next(err); }
};
