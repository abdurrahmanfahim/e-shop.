const laptopDetails = {
  Specification: [
    { name: "Brand", value: "NexSUS Tech Company" },
    {
      name: "Display",
      value:
        "17.3-inch Full HD (1920 x 1080), 144Hz IPS panel with 100% sRGB, Adaptive-Sync, anti-glare",
    },
    {
      name: "Processor",
      value: "Intel Core i9-10980HK (8 cores, 16 threads, up to 5.3GHz turbo)",
    },
    { name: "Graphics", value: "NVIDIA GeForce RTX 3080 (16GB GDDR6)" },
    { name: "Memory", value: "32GB DDR4-3200 RAM" },
    { name: "Storage", value: "1TB PCIe NVMe M.2 SSD" },
    { name: "Audio", value: "2 x 4W speakers, Smart Amp tech" },
    {
      name: "Connection",
      value:
        "Wi-Fi 6, BT 5.1, Ethernet, HDMI 2.0b, USB-C with DP 1.4 & PD, 3x USB-A, 3.5mm audio",
    },
    {
      name: "Keyboard",
      value: "RGB Backlit Chiclet, N-key rollover, Aura Sync",
    },
    { name: "Battery", value: "4-cell 90Wh (up to 8 hrs)" },
    { name: "Dimensions", value: "15.7 x 11.1 x 1.0 in" },
    { name: "Weight", value: "6.28 lbs" },
  ],

  Description: `Power through any task with the NexSUS 17.3-inch gaming laptop, designed for creators and gamers alike. Featuring an ultra-fast Intel Core i9, RTX 3080 graphics, and a vivid 144Hz display with 100% sRGB accuracy, this machine delivers immersive visuals and unmatched performance. Advanced cooling, premium audio, and RGB lighting complete the premium package.`,

  Return: `Returns are accepted within 10 days of delivery. Product must be unused, in original packaging, and include all accessories. A restocking fee may apply. Customer is responsible for return shipping unless the item is defective or incorrect.`,

  Reviews: [
    {
      user: "Zahid H.",
      rating: 5,
      comment:
        "An absolute beast! Handles my 3D rendering and AAA games effortlessly. Highly recommend!",
    },
    {
      user: "Tanisha R.",
      rating: 4,
      comment:
        "Fantastic performance and screen. A bit heavy, but expected for this power.",
    },
    {
      user: "Mehedi A.",
      rating: 5,
      comment:
        "Best laptop I’ve ever used. The RGB keyboard and build quality are top notch.",
    },
  ],
};

const relatedProducts = [
  {
    type: "laptop",
    title:
      "UltraBook Pro 15 Slim Lightweight Laptop with 11th Gen Intel Core i7 Processor and 16GB RAM",
    stars: 4,
    rating: 85,
    price: "1,299.00",
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "799.00",
    discounted: 30,
    inStoke: 10,
  },
  {
    type: "watch",
    title:
      "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
    stars: 4,
    rating: 150,
    price: "299.00",
  },
  {
    type: "headphones",
    title:
      "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
    stars: 3,
    rating: 200,
    price: "199.00",
    discounted: 50,
    inStoke: 50,
  },
  {
    type: "watch",
    title:
      "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
    stars: 4,
    rating: 150,
    price: "299.00",
  },
];

const productDetails = [
  {
    type: "laptop",
    title:
      "UltraBook Pro 15 Slim Lightweight Laptop with 11th Gen Intel Core i7 Processor and 16GB RAM",
    stars: 4,
    rating: 85,
    price: "1,299.00",
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "799.00",
    discounted: 30,
    inStoke: 10,
  },
  {
    type: "headphones",
    title:
      "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
    stars: 3,
    rating: 200,
    price: "199.00",
    discounted: 50,
    inStoke: 50,
  },
  {
    type: "watch",
    title:
      "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
    stars: 4,
    rating: 150,
    price: "299.00",
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "799.00",
    discounted: 30,
    inStoke: 10,
  },

];

const springProductDetails = [
  {
    type: "television",
    title:
      "LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ..",
    stars: 4,
    rating: 85,
    price: "499.00",
    discounted: 50,
    inStoke: 125,
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "399.00",
    discounted: 30,
    inStoke: 70,
  },
  {
    type: "watch",
    title:
      "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
    stars: 4,
    rating: 150,
    price: "899.00",
    discounted: 80,
    inStoke: 30,
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "799.00",
    discounted: 30,
    inStoke: 260,
  },
  {
    type: "headphones",
    title:
      "Noise Cancelling Wireless Headphones with 40-Hour Battery Life and Hi-Res Audio Support",
    stars: 3,
    rating: 200,
    price: "199.00",
    discounted: 50,
    inStoke: 50,
  },
  {
    type: "watch",
    title:
      "SmartWatch Series 7 Fitness Tracker with Heart Rate Monitor, GPS, and 1.8-inch AMOLED Display",
    stars: 4,
    rating: 150,
    price: "299.00",
    discounted: 20,
    inStoke: 0,
  },
  {
    type: "camera",
    title:
      "ProShot DSLR 24MP Camera Bundle with 18-55mm Lens, Tripod, and Carrying Case for Professional Photography",
    stars: 5,
    rating: 45,
    price: "599.00",
    discounted: 30,
    inStoke: 20,
  },
];



const facilityData = [
  { icon: "HeadPhone", title: "Responsive", description: "Customer service available 24/7" },
  { icon: "Shield", title: "Secure", description: "Certified marketplace since 2017" },
  { icon: "Shipping", title: "Shipping", description: "Free, fast, and reliable worldwide" },
  { icon: "Transparent", title: "Transparent", description: "Hassle-free return policy" },
];

const filterCategories = [
  { name: "Computers & Tablets" },
  { name: "Mobile & Accessories" },
  { name: "TV & Home Theater" },
  { name: "Audio & Headphones" },
  { name: "Cameras & Camcorders" },
  { name: "Gaming Equipment" },
  { name: "Home Appliances" },
];

const brandData = [
  { name: "Apple", value: 565 },
  { name: "Samsung", value: 428 },
  { name: "ASUS", value: 323 },
  { name: "Dell", value: 298 },
  { name: "Lenovo", value: 180 },
  { name: "HP", value: 98 },
  { name: "Panasonic", value: 17 },
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, as well as PayPal, Apple Pay, and Google Pay for a seamless checkout experience.",
  },
  {
    question: "How long does the product shipping take?",
    answer: "Shipping usually takes 3–7 business days depending on your location. Orders are processed within 24 hours on business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping times and costs may vary based on your location.",
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time.",
  },
];

import PhoneFooter from "./icons/PhoneFooter";
import EnvelopeFooter from "./icons/EnvelopeFooter";
import LocationFooter from "./icons/LocationFooter";

const footerContact = [
  { icon: <PhoneFooter />, label: "+1 (555) 123-4567", to: "tel:161352163", className: "" },
  { icon: <EnvelopeFooter />, label: "information@eshop.com", to: "mailto:information@eshop.com", className: "" },
  { icon: <LocationFooter />, label: "123 Main Street, Suite 105, Anytown USA", to: "https://maps.app.goo.gl/GLKtcy2x3Lo6XxJq5", className: "text-xl" },
];

const footerLinks = [
  { label: "Products List", to: "/all-products" },
  { label: "Order Tracking", to: "#" },
  { label: "Products Guide", to: "#" },
  { label: "Shopping Cart", to: "/cart" },
  { label: "Tech Blog", to: "/blog" },
];

const footerSupports = [
  { label: "About Us", to: "#" },
  { label: "Privacy Policy", to: "#" },
  { label: "Return Policy", to: "#" },
  { label: "Help Centre", to: "#" },
  { label: "Store Locations", to: "#" },
  { label: "Careers", to: "#" },
];

const footerCategories = [
  { label: "Computers & Tablets", to: "#" },
  { label: "Mobile Phones & Accessories", to: "#" },
  { label: "TV & Home Theater", to: "#" },
  { label: "Audio & Headphones", to: "#" },
  { label: "Cameras & Camcorders", to: "#" },
  { label: "Gaming Equipment", to: "#" },
  { label: "Home Appliances", to: "#" },
];

const footerSocials = [
  { label: "Twitter", to: "https://twitter.com" },
  { label: "Instagram", to: "https://instagram.com" },
  { label: "Facebook", to: "https://facebook.com" },
];

const navLinks = [
  { label: "Limited Sale 👋🏻", to: "/all-products", className: "uppercase" },
  { label: "Best Seller", to: "/all-products" },
  { label: "New Arrival", to: "/all-products" },
];

const orderSummary = [
  {
    item: "2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD",
    quantity: 1,
    price: 1659.0,
  },
  {
    item: "Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band",
    quantity: 1,
    price: 999.0,
  },
  {
    item: "LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ",
    quantity: 2,
    price: 4598.0,
  },
  {
    item: "Console Game Stick HD Wireless Bluetooth Connect",
    quantity: 2,
    price: 218.0,
  },
  {
    item: "Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28",
    quantity: 1,
    price: 259.0,
  },
  {
    item: "Shipping Fee",
    quantity: 1,
    price: 10.0,
  },
];

const cartData = [
  {
    category: "Laptop",
    product: "2019 Smart Laptop 256 GB 13 Inch Pro Chip Core 1 TB HD SSD",
    variant: "Space Gray",
    price: 1659.00,
    quantity: 1,
    total: 1659.00
  },
  {
    category: "Watch",
    product: "Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band",
    variant: "Fiery Red",
    price: 999.00,
    quantity: 1,
    total: 999.00
  },
  {
    category: "Television",
    product: "LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ",
    variant: "Jet Black",
    price: 2299.00,
    quantity: 2,
    total: 4598.00
  },
  {
    category: "Gaming",
    product: "Console Game Stick HD Wireless Bluetooth Connect",
    variant: "White",
    price: 109.00,
    quantity: 2,
    total: 218.00
  },
  {
    category: "Tablet",
    product: "Mini Tablet Pro 16 Inch HD Pencil 128 GB System RAM 28",
    variant: "Space Gray (with Case)",
    price: 259.00,
    quantity: 1,
    total: 259.00
  }
];

  const languages = [
    {
      name: "English",
      code: "english",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      name: "Bengali",
      code: "bengali",
      flag: "https://flagcdn.com/w40/bd.png",
    },
    {
      name: "Arabic",
      code: "arabic",
      flag: "https://flagcdn.com/w40/sa.png",
    },
    {
      name: "Spanish",
      code: "spanish",
      flag: "https://flagcdn.com/w40/es.png",
    },
    { name: "French", code: "french", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "German", code: "german", flag: "https://flagcdn.com/w40/de.png" },
    {
      name: "Chinese",
      code: "chinese",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      name: "Japanese",
      code: "japanese",
      flag: "https://flagcdn.com/w40/jp.png",
    },
  ];
  const currency = [
    { name: "USD", code: "usd", symbol: "$" },
    { name: "BDT", code: "bdt", symbol: "৳" },
    { name: "EUR", code: "eur", symbol: "€" },
    { name: "GBP", code: "gbp", symbol: "£" },
    { name: "JPY", code: "jpy", symbol: "¥" },
    { name: "INR", code: "inr", symbol: "₹" },
    { name: "AUD", code: "aud", symbol: "A$" },
    { name: "CAD", code: "cad", symbol: "C$" },
];
  
  const products = [
    "All Products",
    "Laptops & Desktops",
    "Smartphones",
    "Smart TVs",
    "Bluetooth Speakers",
    "DSLR Cameras",
    "Gaming Consoles",
    "Microwave Ovens",
    "Wearable Devices",
    "Printers",
    "Smart Watches",
    "VR Headsets",
    "Projectors",
  ];

  const categories = [
    "Computers & Tablets",
    "Mobile & Accessories",
    "TV & Home Theater",
    "Audio & Headphones",
    "Cameras & Camcorders",
    "Gaming Equipment",
    "Home Appliances",
  ];

const ELECTRONICS_CATEGORIES = [
  "laptops",
  "smartphones",
  "tablets",
  "mobile-accessories"
];

const fetchProducts = async () => {
  try {
    const requests = ELECTRONICS_CATEGORIES.map((cat) =>
      fetch(`https://dummyjson.com/products/category/${cat}?limit=30`).then((r) => r.json())
    );
    const results = await Promise.all(requests);
    const all = results.flatMap((r) => r.products);

    return all.map((item) => ({
      id: item.id,
      type: item.category,
      title: item.title,
      stars: Math.round(item.rating),
      rating: item.stock,
      price: item.price.toFixed(2),
      discounted: item.discountPercentage ? Math.round(item.discountPercentage) : null,
      inStoke: item.stock,
      image: item.thumbnail,
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};




export {
  laptopDetails,
  relatedProducts,
  productDetails,
  springProductDetails,
  orderSummary,
  cartData,
  fetchProducts,
  languages,
  currency,
  products,
  categories,
  facilityData,
  filterCategories,
  brandData,
  faqs,
  footerContact,
  footerLinks,
  footerSupports,
  footerCategories,
  footerSocials,
  navLinks,
};
