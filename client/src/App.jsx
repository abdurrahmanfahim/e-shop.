import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import CommonLayout from "./components/layouts/CommonLayot";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import LangContextProvider from "./contexts/LangContextProvider";
import ProductsContextProvider from "./contexts/ProductsContextProvider";

function App() {
  return (
    <LangContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>
            <ProductsContextProvider>
              <Toaster position="bottom-right" toastOptions={{ duration: 2500, style: { fontFamily: 'Montserrat', fontSize: '14px' } }} />
              <Routes>
                <Route path="/" element={<CommonLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="all-products" element={<ProductListPage />} />
                  <Route path="product-details/:id" element={<ProductDetailsPage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="favorites" element={<FavoritesPage />} />
                  <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                  <Route path="checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
                  <Route path="orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
                  <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                </Route>
              </Routes>
            </ProductsContextProvider>
          </FavoritesContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </LangContextProvider>
  );
}

export default App;
