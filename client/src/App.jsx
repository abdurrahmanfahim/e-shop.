import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/layouts/CommonLayot";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LangContextProvider from "./contexts/LangContextProvider";
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <LangContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <Routes>
              <Route path="/" element={<CommonLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/all-products" element={<ProductListPage />} />
                <Route path="/product-details/:id" element={<ProductDetailsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
                <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              </Route>
            </Routes>
          </ProductsContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </LangContextProvider>
  );
}

export default App;
