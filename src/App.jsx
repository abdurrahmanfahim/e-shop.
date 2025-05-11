import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductListPage from "./pages/ProductListPage"
import CheckoutPage from "./pages/CheckoutPage"
import Contact from "./pages/Contact"
import BlogPage from "./pages/BlogPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
