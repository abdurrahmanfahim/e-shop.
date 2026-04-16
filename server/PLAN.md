# E-Shop Backend — Implementation Plan

## Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT Auth
- Nodemailer
- Joi validation
- helmet, cors, rate-limit, bcrypt

---

## Folder Structure
```
server/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── contactController.js
├── middleware/
│   ├── auth.js
│   ├── admin.js
│   ├── validate.js
│   └── errorHandler.js
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
│   ├── sendEmail.js
│   └── generateToken.js
├── scripts/
│   └── seedProducts.js
├── .env.example
├── .gitignore
├── server.js
└── package.json
```

---

## API Endpoints

### Auth
| Method | Route | Access |
|--------|-------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/me | Protected |

### Products
| Method | Route | Access |
|--------|-------|--------|
| GET | /api/products | Public |
| GET | /api/products/:id | Public |
| POST | /api/products | Admin |
| PUT | /api/products/:id | Admin |
| DELETE | /api/products/:id | Admin |

### Cart
| Method | Route | Access |
|--------|-------|--------|
| GET | /api/cart | Protected |
| POST | /api/cart | Protected |
| PUT | /api/cart/:itemId | Protected |
| DELETE | /api/cart/:itemId | Protected |
| DELETE | /api/cart | Protected |

### Orders
| Method | Route | Access |
|--------|-------|--------|
| POST | /api/orders | Protected |
| GET | /api/orders | Protected |
| GET | /api/orders/:id | Protected |
| GET | /api/admin/orders | Admin |
| PUT | /api/admin/orders/:id | Admin |

### Contact
| Method | Route | Access |
|--------|-------|--------|
| POST | /api/contact | Public |

---

## TODO

- [x] Step 1 — `init: project setup & dependencies`
- [x] Step 2 — `feat: db connection & server entry`
- [x] Step 3 — `feat: user model & auth (register/login/me)`
- [x] Step 4 — `feat: global error handler & validation middleware`
- [x] Step 5 — `feat: product model & CRUD routes`
- [x] Step 6 — `feat: seed script (import from DummyJSON)`
- [x] Step 7 — `feat: cart model & CRUD routes`
- [x] Step 8 — `feat: order model & checkout routes`
- [x] Step 9 — `feat: contact form & nodemailer`
- [x] Step 10 — `chore: README`
- [x] Step 11 — `chore: push to GitHub`
- [x] Step 12 — `feat: Joi validation schemas + fix admin route conflict`
- [ ] Step 13 — `feat: frontend integration (replace DummyJSON with own API)`
- [ ] Step 14 — `feat: AuthContext + protected routes in frontend`
- [ ] Step 15 — `feat: wire up Cart, Checkout, Contact forms`
- [ ] Step 16 — `feat: admin dashboard routes`
