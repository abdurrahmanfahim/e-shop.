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
        value:
          "Intel Core i9-10980HK (8 cores, 16 threads, up to 5.3GHz turbo)",
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
  
  export { laptopDetails, relatedProducts };