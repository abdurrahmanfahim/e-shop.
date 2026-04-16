# E-Shop Backend — CONTEXT

## What is this?
REST API for the E-Shop React frontend. Built as an entry-level fullstack project.

## Stack
| Layer | Tech |
|---|---|
| Runtime | Node.js (ES Modules) |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (Bearer token) |
| Validation | Joi |
| Email | Nodemailer |
| Security | helmet, cors, express-rate-limit, bcryptjs |

## Project Structure
```
server/
├── config/db.js              — MongoDB connection
├── controllers/              — Business logic
├── middleware/               — auth, admin, validate, errorHandler
├── models/                   — Mongoose schemas
├── routes/                   — Express routers
├── utils/                    — generateToken, sendEmail
├── scripts/seedProducts.js   — Seed DB from DummyJSON
├── server.js                 — Entry point
└── .env.example              — Required env vars
```

## Models
- **User** — name, email, password (hashed), role (user/admin), address
- **Product** — title, category, brand, price, stock, images, reviews, etc.
- **Cart** — user ref, items (product ref, quantity, variant, price)
- **Order** — user ref, items, billing, shipping, payment, status
- **Contact** — name, phone, email, message

## API Base URL
```
http://localhost:5000/api
```

## Endpoints Summary
```
POST   /auth/register
POST   /auth/login
GET    /auth/me               (protected)

GET    /products              ?category, brand, minPrice, maxPrice, sort, search, page, limit
GET    /products/:id
POST   /products              (admin)
PUT    /products/:id          (admin)
DELETE /products/:id          (admin)

GET    /cart                  (protected)
POST   /cart                  (protected)
PUT    /cart/:itemId          (protected)
DELETE /cart/:itemId          (protected)
DELETE /cart                  (protected)

POST   /orders                (protected)
GET    /orders                (protected)
GET    /orders/:id            (protected)
GET    /orders/admin/all      (admin)
PUT    /orders/admin/:id      (admin)

POST   /contact
```

## Auth
All protected routes require:
```
Authorization: Bearer <token>
```

## Setup
```bash
cd server
cp .env.example .env   # fill in values
npm install
npm run dev
```

## Seed Database
```bash
node scripts/seedProducts.js
```

## Env Variables
```
PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN,
CLIENT_URL, EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS
```

## Commit Convention
```
init:  — project setup
feat:  — new feature
fix:   — bug fix
chore: — config, deps, cleanup
```
