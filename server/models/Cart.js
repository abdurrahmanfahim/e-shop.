import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  variant:  String,
  price:    { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [itemSchema],
}, { timestamps: true });

export default mongoose.model('Cart', cartSchema);
