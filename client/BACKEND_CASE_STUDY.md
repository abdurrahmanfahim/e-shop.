# E-Shop Backend — Case Study

## 1. Project Overview

E-Shop is a full-stack e-commerce application. The frontend is built with React + Tailwind CSS. Currently it uses **DummyJSON** as a mock API. The goal is to replace it with a real custom backend using **Node.js + Express + MongoDB**.

---

## 2. Current Frontend Analysis

### Pages & Features
| Page | Current State | Backend Needed |
|---|---|---|
| `HomePage` | Fetches products from DummyJSON | Product listing API |
| `ProductListPage` | Fetch + filter + sort + paginate | Product search/filter API |
| `ProductDetailsPage` | Fetch single product by ID | Single product API |
| `CartPage` | Static `cartData` from local array | Cart CRUD API |
| `CheckoutPage` | UI only, no submission | Order creation API |
| `Contact` | Form UI only | Contact/email API |
| `BlogPage` | Static | Blog API (optional) |

### Contexts
- `ProductsContext` — fetches all products on app load, shared globally
- `LangContext` — i18n language switching (frontend only)

### Key Data Flows
- Products fetched from `dummyjson.com/products/category/:cat`
- Product details fetched from `dummyjson.com/products/:id`
- Cart data is static (`cartData` array in `productDetailsArrays.jsx`)
- Order summary is static (`orderSummary` array)
- No authentication currently

---

## 3. Backend Requirements

### 3.1 Tech Stack
```
Runtime     : Node.js
Framework   : Express.js
Database    : MongoDB (Mongoose ODM)
Auth        : JWT (JSON Web Token)
File Upload : Cloudinary (product images)
Email       : Nodemailer (contact form, order confirmation)
Validation  : Joi / express-validator
Security    : helmet, cors, rate-limit, bcrypt
```

---

### 3.2 Database Models

#### User
```js
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: enum['user', 'admin'],
  address: {
    street, city, state, country, zip
  },
  createdAt: Date
}
```

#### Product
```js
{
  title: String,
  description: String,
  category: String,
  brand: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  tags: [String],
  images: [String],
  thumbnail: String,
  rating: Number,
  reviews: [{
    reviewerName: String,
    rating: Number,
    comment: String,
    date: Date
  }],
  weight: Number,
  dimensions: { width, height, depth },
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  returnPolicy: String,
  createdAt: Date
}
```

#### Cart
```js
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    variant: String,
    price: Number
  }],
  updatedAt: Date
}
```

#### Order
```js
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    title: String,
    quantity: Number,
    price: Number,
    variant: String
  }],
  billing: {
    firstName, lastName, phone, email,
    address, country, state, city, zip
  },
  shipping: {
    recipientName, contactNumber,
    address, country, state, city, zip,
    method: enum['standard', 'express', 'overnight'],
    cost: Number,
    deliveryInstructions: String
  },
  payment: {
    method: enum['card', 'cod'],
    status: enum['pending', 'paid', 'failed']
  },
  coupon: String,
  subtotal: Number,
  total: Number,
  status: enum['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
  createdAt: Date
}
```

#### Contact
```js
{
  name: String,
  phone: String,
  email: String,
  message: String,
  createdAt: Date
}
```

---

### 3.3 API Endpoints

#### Auth
```
POST   /api/auth/register       — নতুন user register
POST   /api/auth/login          — login, JWT return
POST   /api/auth/logout         — token invalidate
GET    /api/auth/me             — current user info (protected)
```

#### Products
```
GET    /api/products            — all products (filter, sort, paginate)
GET    /api/products/:id        — single product
GET    /api/products/category/:cat — category wise products
POST   /api/products            — create product (admin)
PUT    /api/products/:id        — update product (admin)
DELETE /api/products/:id        — delete product (admin)
```

Query params for listing:
```
?category=laptops
?brand=Apple
?minPrice=100&maxPrice=1000
?sort=price_asc | price_desc | rating | newest
?page=1&limit=16
?search=iphone
```

#### Cart
```
GET    /api/cart                — get user cart (protected)
POST   /api/cart                — add item to cart (protected)
PUT    /api/cart/:itemId        — update quantity (protected)
DELETE /api/cart/:itemId        — remove item (protected)
DELETE /api/cart                — clear cart (protected)
```

#### Orders
```
POST   /api/orders              — place order (protected)
GET    /api/orders              — user's order history (protected)
GET    /api/orders/:id          — single order detail (protected)
GET    /api/admin/orders        — all orders (admin)
PUT    /api/admin/orders/:id    — update order status (admin)
```

#### Contact
```
POST   /api/contact             — submit contact form
GET    /api/admin/contacts      — view all messages (admin)
```

#### Coupon (optional)
```
POST   /api/coupon/validate     — validate coupon code
```

---

### 3.4 Middleware
```
authMiddleware     — JWT verify, attach user to req
adminMiddleware    — check role === 'admin'
rateLimiter        — prevent brute force (login endpoint)
errorHandler       — global error handler
validate           — Joi schema validation
```

---

## 4. Frontend Changes Needed

| File | Change |
|---|---|
| `productDetailsArrays.jsx` | `fetchProducts` → hit own `/api/products` |
| `ProductDetailsPage.jsx` | fetch from `/api/products/:id` |
| `CartPage.jsx` | replace static `cartData` with `/api/cart` |
| `CheckoutPage.jsx` | submit form to `/api/orders` |
| `Contact.jsx` | submit form to `/api/contact` |
| `ProductsContextProvider.jsx` | fetch from own API |
| New: `AuthContext` | login/register/logout state |
| New: `api.js` | axios instance with base URL + JWT header |

---

## 5. Folder Structure (Backend)

```
backend/
├── config/
│   ├── db.js               — MongoDB connection
│   └── cloudinary.js       — Cloudinary config
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── contactController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   ├── errorHandler.js
│   └── rateLimiter.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Order.js
│   └── Contact.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   └── contactRoutes.js
├── utils/
│   ├── sendEmail.js        — Nodemailer helper
│   └── generateToken.js    — JWT helper
├── .env
├── server.js
└── package.json
```

---

## 6. Environment Variables

```env
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@email.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:5173
```

---

## 7. Development Phases

### Phase 1 — Core Setup
- Express server, MongoDB connection, error handler
- User model + Auth (register, login, JWT)

### Phase 2 — Products
- Product model + CRUD
- Filter, sort, pagination
- Seed script to import DummyJSON data into MongoDB

### Phase 3 — Cart & Orders
- Cart CRUD (protected)
- Order placement + email confirmation

### Phase 4 — Frontend Integration
- Replace DummyJSON calls with own API
- Add AuthContext, protected routes
- Wire up Cart, Checkout, Contact forms

### Phase 5 — Admin & Polish
- Admin dashboard routes
- Coupon system
- Rate limiting, security headers

---

## 8. Packages

### Backend
```json
"dependencies": {
  "express": "^4.18",
  "mongoose": "^8",
  "bcryptjs": "^2.4",
  "jsonwebtoken": "^9",
  "dotenv": "^16",
  "cors": "^2.8",
  "helmet": "^7",
  "express-rate-limit": "^7",
  "joi": "^17",
  "nodemailer": "^6",
  "cloudinary": "^2",
  "multer": "^1.4",
  "multer-storage-cloudinary": "^4"
},
"devDependencies": {
  "nodemon": "^3"
}
```

### Frontend (new additions)
```json
"axios": "^1.6",
"js-cookie": "^3"
```
