import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  firstName: String, lastName: String, phone: String, email: String,
  address: String, country: String, state: String, city: String, zip: String,
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title:    String,
    quantity: Number,
    price:    Number,
    variant:  String,
  }],
  billing:  addressSchema,
  shipping: {
    ...addressSchema.obj,
    recipientName:        String,
    contactNumber:        String,
    method:               { type: String, enum: ['standard', 'express', 'overnight'], default: 'standard' },
    cost:                 { type: Number, default: 9.99 },
    deliveryInstructions: String,
  },
  payment: {
    method: { type: String, enum: ['card', 'cod'], default: 'card' },
    status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  },
  coupon:   String,
  subtotal: Number,
  total:    Number,
  status:   { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
