import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewerName: String,
  rating:       { type: Number, min: 1, max: 5 },
  comment:      String,
  date:         { type: Date, default: Date.now },
});

const productSchema = new mongoose.Schema({
  title:               { type: String, required: true, trim: true },
  description:         String,
  category:            { type: String, required: true, lowercase: true, trim: true },
  brand:               { type: String, trim: true },
  price:               { type: Number, required: true, min: 0 },
  discountPercentage:  { type: Number, default: 0, min: 0, max: 100 },
  stock:               { type: Number, default: 0, min: 0 },
  tags:                [String],
  images:              [String],
  thumbnail:           String,
  rating:              { type: Number, default: 0 },
  reviews:             [reviewSchema],
  weight:              Number,
  dimensions:          { width: Number, height: Number, depth: Number },
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus:  String,
  returnPolicy:        String,
}, { timestamps: true });

productSchema.index({ title: 'text', description: 'text', brand: 'text' });

export default mongoose.model('Product', productSchema);
