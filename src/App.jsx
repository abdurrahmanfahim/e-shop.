import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/layouts/CommonLayot";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import LangContextProvider from "./contexts/LangContextProvider";
import Dashboard from "./dashboardForTesting/Dashboard";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <LangContextProvider>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-products" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </LangContextProvider>
  );
}

export default App;
