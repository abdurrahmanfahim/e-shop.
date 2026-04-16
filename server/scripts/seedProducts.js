import 'dotenv/config';
import mongoose from 'mongoose';
import dns from 'dns';
import Product from '../models/Product.js';

dns.setServers(['1.1.1.1', '1.0.0.1']);

const CATEGORIES = ['laptops', 'smartphones', 'tablets', 'mobile-accessories'];

const ALLOWED_CATEGORIES = new Set(CATEGORIES);

const fetchCategory = async (cat) => {
  if (!ALLOWED_CATEGORIES.has(cat)) throw new Error(`Invalid category: ${cat}`);
  const res = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(cat)}?limit=30`);
  const data = await res.json();
  return data.products;
};

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
  });
  console.log('Connected to MongoDB');

  await Product.deleteMany({});
  console.log('Cleared existing products');

  const all = (await Promise.all(CATEGORIES.map(fetchCategory))).flat();

  const products = all.map(p => ({
    title:               p.title,
    description:         p.description,
    category:            p.category,
    brand:               p.brand,
    price:               p.price,
    discountPercentage:  p.discountPercentage,
    stock:               p.stock,
    tags:                p.tags,
    images:              p.images,
    thumbnail:           p.thumbnail,
    rating:              p.rating,
    reviews:             p.reviews?.map(r => ({ reviewerName: r.reviewerName, rating: r.rating, comment: r.comment, date: r.date })),
    weight:              p.weight,
    dimensions:          p.dimensions,
    warrantyInformation: p.warrantyInformation,
    shippingInformation: p.shippingInformation,
    availabilityStatus:  p.availabilityStatus,
    returnPolicy:        p.returnPolicy,
  }));

  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
