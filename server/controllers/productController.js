import Product from '../models/Product.js';
import escapeRegExp from 'escape-string-regexp';

export const getProducts = async (req, res, next) => {
  try {
    const { category, brand, minPrice, maxPrice, sort, search, page = 1, limit = 16 } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (brand) filter.brand = new RegExp(escapeRegExp(brand), 'i');
    if (minPrice || maxPrice) filter.price = { ...(minPrice && { $gte: +minPrice }), ...(maxPrice && { $lte: +maxPrice }) };
    if (search) filter.$text = { $search: search };

    const sortMap = { price_asc: { price: 1 }, price_desc: { price: -1 }, rating: { rating: -1 }, newest: { createdAt: -1 } };
    const sortBy = sortMap[sort] || { createdAt: -1 };

    const skip = (page - 1) * limit;
    const [products, total] = await Promise.all([
      Product.find(filter).sort(sortBy).skip(skip).limit(+limit),
      Product.countDocuments(filter),
    ]);
    res.json({ products, total, page: +page, pages: Math.ceil(total / limit) });
  } catch (err) { next(err); }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { next(err); }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) { next(err); }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { next(err); }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) { next(err); }
};

export const addReview = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    product.reviews.push({ reviewerName: req.user.name, rating, comment });
    product.rating = product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review added' });
  } catch (err) { next(err); }
};
