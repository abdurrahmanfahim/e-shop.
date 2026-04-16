# Frontend Integration Plan

## Design System (existing)

### Colors
| Token | Value | Usage |
|---|---|---|
| `green` | `#023440` | Primary — buttons, borders, accents |
| `black` | `#303030` | Text |
| `yellow` | `#e0be74` | Stars |
| `lightGray` | `#f4f4f4` | Backgrounds, cards |
| `orTen` | `#ffefed` | Light tint |

### Typography
| Font | Usage |
|---|---|
| `font-poppins` | Headings, prices, bold labels |
| `font-montserrat` | Body, inputs, descriptions |

### Radius
- `rounded-10p` = 10px
- `rounded-15p` = 15px

### Components (reusable)
- `Button` — bg=green, color=white, rounded-10p, font-montserrat bold
- `FormInput` — border `#CBCBCB`, rounded-10p, label font-montserrat bold, star=green
- `Container` — max-w-[1440px] px responsive
- `ProductLayout` — card with hover border, group animations
- `ProductDetailsSkeleton` — animate-pulse gray blocks

### Patterns
- Hover: `hover:text-green hover:underline`
- Active border: `border-green`
- Disabled: `text-[#CBCBCB] border-[#CBCBCB]`
- Section spacing: `mt-8 lg:mt-16`, `mb-12 lg:mb-20`

---

## What's Missing (vs Backend)

| Feature | Backend | Frontend |
|---|---|---|
| Register | ✅ POST /auth/register | ❌ No page |
| Login | ✅ POST /auth/login | ❌ No page |
| Auth state | ✅ JWT | ❌ No AuthContext |
| Protected routes | ✅ middleware | ❌ No ProtectedRoute |
| Cart (real) | ✅ /api/cart | ❌ Static cartData |
| Checkout submit | ✅ POST /api/orders | ❌ Form not wired |
| Contact submit | ✅ POST /api/contact | ❌ Form not wired |
| Product reviews | ✅ POST /api/products/:id/reviews | ❌ No UI |
| Coupon apply | ✅ POST /api/coupon/validate | ❌ Not wired |
| Order history | ✅ GET /api/orders | ❌ No page |
| Profile/password | ✅ PUT /api/auth/profile | ❌ No page |
| Products from API | ✅ GET /api/products | ❌ Still DummyJSON |
| axios instance | — | ❌ Not created |

---

## TODO

### Step 1 — `chore: install axios, setup api.js`
- [x] `npm install axios`
- [x] `src/api/api.js` — axios instance with baseURL + JWT interceptor

### Step 2 — `feat: AuthContext (login/register/logout)`
- [x] `src/contexts/AuthContext.js`
- [x] `src/contexts/AuthContextProvider.jsx`
- [x] Wrap App in AuthContextProvider
- [x] Store token in localStorage

### Step 3 — `feat: Login & Register pages`
- [x] `src/pages/LoginPage.jsx`
- [x] `src/pages/RegisterPage.jsx`
- [x] Add routes in App.jsx
- [x] Header UserIcon → login/profile link

### Step 4 — `feat: ProtectedRoute component`
- [x] `src/components/layouts/ProtectedRoute.jsx`
- [x] Wrap `/cart`, `/checkout`, `/orders`, `/profile` routes

### Step 5 — `feat: replace DummyJSON with own API`
- [ ] Update `ProductsContextProvider` → fetch from `/api/products`
- [ ] Update `ProductDetailsPage` → fetch from `/api/products/:id`
- [ ] Update `ProductListPage` filter/sort → pass to API query params

### Step 6 — `feat: real Cart (API connected)`
- [x] `src/contexts/CartContext.js` + `CartContextProvider.jsx`
- [ ] `CartPage.jsx` — fetch from `/api/cart`, add/remove/update
- [x] Header cart icon → show item count badge

### Step 7 — `feat: Checkout form submit`
- [ ] `InformationAccPart` → collect billing data in state
- [ ] `ShippingAccPart` → collect shipping data in state
- [ ] `PaymentAccPart` → POST to `/api/orders`
- [ ] Coupon apply → POST to `/api/coupon/validate`
- [ ] Success → redirect to `/orders`

### Step 8 — `feat: Contact form submit`
- [ ] `Contact.jsx` → POST to `/api/contact`
- [ ] Success toast / message

### Step 9 — `feat: Order history page`
- [x] `src/pages/OrdersPage.jsx`
- [x] Add route `/orders`
- [x] List orders with status badge

### Step 10 — `feat: Profile page`
- [x] `src/pages/ProfilePage.jsx`
- [x] Update name/address → PUT `/api/auth/profile`
- [x] Change password → PUT `/api/auth/password`

### Step 11 — `chore: commit & push all`
- [x] Final commit and push
