const defaultProducts = [
  {
    id: 1,
    name: "Spark Duo Smartphone",
    category: "Phones",
    price: 459000,
    rating: 4.7,
    description: "A reliable Android smartphone with 128GB storage and a long battery for busy Kampala days.",
    badge: "Top Phone",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 2,
    name: "Nova X Pro Smartphone",
    category: "Phones",
    price: 529000,
    rating: 4.6,
    description: "A sharp display, fast charging, and dual SIM support for work and personal use.",
    badge: "Fast Charge",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 3,
    name: "Redmi Note Lite",
    category: "Phones",
    price: 639000,
    rating: 4.8,
    description: "Balanced performance with a smooth camera setup and plenty of storage for daily apps.",
    badge: "Best Seller",
    image: "data:image/jpeg;base64,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",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 4,
    name: "Galaxy A24 Dual SIM",
    category: "Phones",
    price: 785000,
    rating: 4.7,
    description: "A dependable mid-range phone with bright visuals and secure fingerprint unlock.",
    badge: "Popular Pick",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 5,
    name: "Tecno Camon Air",
    category: "Phones",
    price: 689000,
    rating: 4.5,
    description: "Built for social photos, voice notes, and all-day browsing on the move.",
    badge: "Camera Ready",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 6,
    name: "Infinix Hot Wave",
    category: "Phones",
    price: 579000,
    rating: 4.4,
    description: "A budget-friendly smartphone with a large battery and smooth everyday multitasking.",
    badge: "Budget Buy",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 7,
    name: "Itel Vision Max",
    category: "Phones",
    price: 399000,
    rating: 4.3,
    description: "A practical entry smartphone for students, chat apps, and light streaming.",
    badge: "Starter Pick",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 8,
    name: "Oraimo PowerPhone Mini",
    category: "Phones",
    price: 349000,
    rating: 4.2,
    description: "Compact and affordable with 4G access for calls, payments, and social apps.",
    badge: "Compact Deal",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 9,
    name: "Nokia Smart 4G",
    category: "Phones",
    price: 469000,
    rating: 4.4,
    description: "Simple, durable, and easy to use with clear sound and dependable signal support.",
    badge: "Everyday Value",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 10,
    name: "Phantom Zoom Plus",
    category: "Phones",
    price: 1199000,
    rating: 4.9,
    description: "Premium performance with a high refresh display, strong cameras, and quick charging.",
    badge: "Flagship",
    image: "https://images.pexels.com/photos/215581/pexels-photo-215581.jpeg?cs=srgb&dl=pexels-john-tekeridis-21837-215581.jpg&fm=jpg",
    accentA: "#f29e74",
    accentB: "#d85f3d"
  },
  {
    id: 11,
    name: "Ergo Mesh Office Chair",
    category: "Home and Office",
    price: 285000,
    rating: 4.5,
    description: "Breathable support for study, remote work, and home office comfort.",
    badge: "Office Pick",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 12,
    name: "Compact Study Desk",
    category: "Home and Office",
    price: 229000,
    rating: 4.4,
    description: "A neat desk with enough surface for a laptop, books, and a writing lamp.",
    badge: "Student Favor",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 13,
    name: "3-Tier Bookshelf",
    category: "Home and Office",
    price: 189000,
    rating: 4.3,
    description: "Keeps files, decor, and study materials organized in a compact corner footprint.",
    badge: "Space Saver",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 14,
    name: "Portable Foldable Table",
    category: "Home and Office",
    price: 135000,
    rating: 4.2,
    description: "Easy to move between rooms for temporary workstations and dining overflow.",
    badge: "Flexible Use",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 15,
    name: "Executive Swivel Chair",
    category: "Home and Office",
    price: 419000,
    rating: 4.7,
    description: "Soft cushioning and adjustable height for longer work sessions.",
    badge: "Premium Seat",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 16,
    name: "Lockable Filing Cabinet",
    category: "Home and Office",
    price: 245000,
    rating: 4.4,
    description: "Secure storage for receipts, office documents, and personal records.",
    badge: "Secure Storage",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 17,
    name: "LED Desk Lamp",
    category: "Home and Office",
    price: 79000,
    rating: 4.6,
    description: "Bright adjustable lighting for evening reading, calls, and focused desk work.",
    badge: "Bright Idea",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 18,
    name: "Wood Finish TV Stand",
    category: "Home and Office",
    price: 315000,
    rating: 4.3,
    description: "A clean storage stand for screens, remotes, and small living room accessories.",
    badge: "Living Room",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 19,
    name: "Conference Side Table",
    category: "Home and Office",
    price: 165000,
    rating: 4.1,
    description: "A simple table for meeting corners, guest seating, or a compact printer setup.",
    badge: "Utility Pick",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 20,
    name: "Storage Ottoman Bench",
    category: "Home and Office",
    price: 205000,
    rating: 4.5,
    description: "Extra seating with hidden space for throws, toys, and household clutter.",
    badge: "Dual Purpose",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?cs=srgb&dl=pexels-fotios-photos-1957477.jpg&fm=jpg",
    accentA: "#8db69d",
    accentB: "#325c4c"
  },
  {
    id: 21,
    name: "32-inch Smart LED TV",
    category: "Electronics",
    price: 689000,
    rating: 4.6,
    description: "Stream shows, connect a decoder, and enjoy clear picture quality at home.",
    badge: "Hot Deal",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 22,
    name: "Bluetooth Soundbar",
    category: "Electronics",
    price: 249000,
    rating: 4.4,
    description: "Adds fuller sound for movies, music, and football nights in the sitting room.",
    badge: "Room Upgrade",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 23,
    name: "Digital Air Fryer 5L",
    category: "Electronics",
    price: 389000,
    rating: 4.7,
    description: "Crisp fries, chicken, and snacks with less oil and easy temperature control.",
    badge: "Kitchen Hit",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 24,
    name: "Portable Projector",
    category: "Electronics",
    price: 559000,
    rating: 4.3,
    description: "Project movies, lessons, or match highlights on a wall with simple setup.",
    badge: "Movie Night",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 25,
    name: "Home Theatre Speakers",
    category: "Electronics",
    price: 479000,
    rating: 4.5,
    description: "Multi-speaker sound for a richer entertainment setup at home.",
    badge: "Big Sound",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 26,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 139000,
    rating: 4.2,
    description: "Compact everyday audio for calls, playlists, and commutes.",
    badge: "Daily Audio",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 27,
    name: "Solar Rechargeable Radio",
    category: "Electronics",
    price: 119000,
    rating: 4.6,
    description: "Useful for music, news, and backup power during outages.",
    badge: "Power Backup",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 28,
    name: "Ring Light Kit",
    category: "Electronics",
    price: 99000,
    rating: 4.4,
    description: "A handy lighting setup for content creation, makeup, or clear video calls.",
    badge: "Creator Pick",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 29,
    name: "Standing Fan 18-inch",
    category: "Electronics",
    price: 215000,
    rating: 4.3,
    description: "Reliable airflow for bedrooms, shops, and office spaces in warm weather.",
    badge: "Cool Choice",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 30,
    name: "Microwave Oven 20L",
    category: "Electronics",
    price: 425000,
    rating: 4.5,
    description: "Fast reheating and simple meal prep for home kitchens and office use.",
    badge: "Home Essential",
    image: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?cs=srgb&dl=pexels-karola-g-5202925.jpg&fm=jpg",
    accentA: "#8fb5f2",
    accentB: "#3450a2"
  },
  {
    id: 31,
    name: "GlowCare Beauty Set",
    category: "Health and Beauty",
    price: 99000,
    rating: 4.4,
    description: "A daily skincare and beauty bundle designed for a clean, fresh routine.",
    badge: "Daily Care",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 32,
    name: "Vitamin C Face Serum",
    category: "Health and Beauty",
    price: 69000,
    rating: 4.6,
    description: "A lightweight serum to brighten dull skin and support an even-looking tone.",
    badge: "Glow Boost",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 33,
    name: "Hydrating Body Lotion",
    category: "Health and Beauty",
    price: 43000,
    rating: 4.3,
    description: "Smooth moisture for everyday skin care without a heavy feel.",
    badge: "Soft Skin",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 34,
    name: "Electric Hair Clipper",
    category: "Health and Beauty",
    price: 145000,
    rating: 4.5,
    description: "A neat grooming tool for home trims, beard shaping, and quick touch-ups.",
    badge: "Barber Pick",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 35,
    name: "Facial Cleansing Brush",
    category: "Health and Beauty",
    price: 85000,
    rating: 4.2,
    description: "Gentle cleansing support for removing makeup, oil, and daily buildup.",
    badge: "Fresh Finish",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 36,
    name: "Sunscreen SPF 50",
    category: "Health and Beauty",
    price: 58000,
    rating: 4.7,
    description: "Lightweight sun protection for daily wear in bright outdoor conditions.",
    badge: "Sun Guard",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 37,
    name: "Matte Lipstick Set",
    category: "Health and Beauty",
    price: 62000,
    rating: 4.4,
    description: "A versatile set of wearable shades for office, weekend, and event looks.",
    badge: "Color Set",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 38,
    name: "Aloe Vera Shower Gel",
    category: "Health and Beauty",
    price: 36000,
    rating: 4.3,
    description: "A refreshing wash for daily showers with a clean finish.",
    badge: "Spa Feel",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 39,
    name: "Hair Dryer Pro",
    category: "Health and Beauty",
    price: 165000,
    rating: 4.5,
    description: "Fast drying with easy heat control for home styling.",
    badge: "Salon Ready",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 40,
    name: "Manicure Grooming Kit",
    category: "Health and Beauty",
    price: 54000,
    rating: 4.2,
    description: "Compact care essentials for nails, brows, and travel grooming.",
    badge: "Travel Kit",
    image: "https://images.pexels.com/photos/15569181/pexels-photo-15569181.jpeg?cs=srgb&dl=pexels-mearlywan-307951439-15569181.jpg&fm=jpg",
    accentA: "#f0b6c7",
    accentB: "#bf5f7d"
  },
  {
    id: 41,
    name: "Kampala Street Sneakers",
    category: "Fashion",
    price: 129000,
    rating: 4.3,
    description: "Comfortable everyday sneakers with a sharp casual look for work or weekend wear.",
    badge: "Trending",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 42,
    name: "Classic Canvas Trainers",
    category: "Fashion",
    price: 98000,
    rating: 4.2,
    description: "Lightweight lace-ups that pair easily with jeans, shorts, and casual fits.",
    badge: "Easy Style",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 43,
    name: "Leather Slide Sandals",
    category: "Fashion",
    price: 89000,
    rating: 4.4,
    description: "Simple everyday sandals with cushioned comfort for warm days.",
    badge: "Daily Wear",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 44,
    name: "Denim Jacket",
    category: "Fashion",
    price: 149000,
    rating: 4.5,
    description: "A versatile layer for cool evenings, travel, and everyday outfits.",
    badge: "Wardrobe Staple",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 45,
    name: "Cotton Polo Shirt",
    category: "Fashion",
    price: 65000,
    rating: 4.3,
    description: "Clean casual style with breathable fabric for office Fridays and weekends.",
    badge: "Smart Casual",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 46,
    name: "Ladies Handbag",
    category: "Fashion",
    price: 115000,
    rating: 4.4,
    description: "Structured storage for essentials with a polished look for day-to-day use.",
    badge: "Best Accessory",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 47,
    name: "Slim Fit Jeans",
    category: "Fashion",
    price: 119000,
    rating: 4.2,
    description: "Stretch denim with a modern cut that works with sneakers or loafers.",
    badge: "Fit Favorite",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 48,
    name: "Printed Maxi Dress",
    category: "Fashion",
    price: 139000,
    rating: 4.6,
    description: "An easy flowing dress for church, brunch, and special events.",
    badge: "Weekend Look",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 49,
    name: "Baseball Cap",
    category: "Fashion",
    price: 39000,
    rating: 4.1,
    description: "A simple cap for sun cover, errands, and sport-inspired outfits.",
    badge: "Grab and Go",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 50,
    name: "Travel Weekender Bag",
    category: "Fashion",
    price: 159000,
    rating: 4.5,
    description: "A roomy carry bag for gym visits, road trips, and short travel.",
    badge: "Travel Ready",
    image: "https://images.pexels.com/photos/13560373/pexels-photo-13560373.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13560373.jpg&fm=jpg",
    accentA: "#f2cc78",
    accentB: "#cc8d19"
  },
  {
    id: 51,
    name: "Refurbished Core i5 Laptop",
    category: "Computing",
    price: 1450000,
    rating: 4.8,
    description: "A dependable laptop for school, office tasks, browsing, and video meetings.",
    badge: "Best Value",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 52,
    name: "15-inch Ryzen Laptop",
    category: "Computing",
    price: 1890000,
    rating: 4.7,
    description: "Fast everyday performance for multitasking, study, and creative work.",
    badge: "Power Pick",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 53,
    name: "USB-C Docking Hub",
    category: "Computing",
    price: 149000,
    rating: 4.4,
    description: "Adds HDMI, USB, and card reader ports to slim modern laptops.",
    badge: "Desk Setup",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 54,
    name: "Wireless Keyboard Mouse Combo",
    category: "Computing",
    price: 119000,
    rating: 4.3,
    description: "A tidy desktop pair for home office and productivity tasks.",
    badge: "Cable Free",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 55,
    name: "1TB External Hard Drive",
    category: "Computing",
    price: 269000,
    rating: 4.6,
    description: "Handy storage for backups, media libraries, and project files.",
    badge: "Backup Ready",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 56,
    name: "27-inch IPS Monitor",
    category: "Computing",
    price: 695000,
    rating: 4.7,
    description: "A large clear display for spreadsheets, design work, and extended multitasking.",
    badge: "Work Upgrade",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 57,
    name: "Portable SSD 512GB",
    category: "Computing",
    price: 315000,
    rating: 4.8,
    description: "Fast portable storage for creators, students, and laptop users on the move.",
    badge: "Fast Transfer",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 58,
    name: "Laptop Backpack",
    category: "Computing",
    price: 99000,
    rating: 4.4,
    description: "A padded bag with practical compartments for devices and daily essentials.",
    badge: "Commute Pick",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 59,
    name: "Webcam Full HD",
    category: "Computing",
    price: 135000,
    rating: 4.3,
    description: "Clear video for online classes, meetings, and remote interviews.",
    badge: "Call Ready",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 60,
    name: "Wi-Fi 6 Router",
    category: "Computing",
    price: 289000,
    rating: 4.5,
    description: "Stronger wireless coverage for apartments, small offices, and streaming setups.",
    badge: "Network Boost",
    image: "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg",
    accentA: "#9dd8d5",
    accentB: "#1f6b78"
  },
  {
    id: 61,
    name: "ActiveFit Training Kit",
    category: "Sporting Goods",
    price: 119000,
    rating: 4.6,
    description: "A simple kit with mat and resistance bands for home workouts and fitness practice.",
    badge: "Fitness Pick",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 62,
    name: "Yoga Mat Pro",
    category: "Sporting Goods",
    price: 89000,
    rating: 4.4,
    description: "Comfortable grip and cushioning for stretching, yoga, and floor routines.",
    badge: "Stretch Ready",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 63,
    name: "Adjustable Dumbbell Pair",
    category: "Sporting Goods",
    price: 329000,
    rating: 4.7,
    description: "Space-saving weights for strength training in a home setup.",
    badge: "Home Gym",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 64,
    name: "Resistance Band Set",
    category: "Sporting Goods",
    price: 59000,
    rating: 4.3,
    description: "Versatile bands for mobility work, warmups, and full-body sessions.",
    badge: "Easy Training",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 65,
    name: "Football Match Ball",
    category: "Sporting Goods",
    price: 75000,
    rating: 4.5,
    description: "Durable stitching and balanced weight for weekend games and practice.",
    badge: "Match Day",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 66,
    name: "Skipping Rope Speed",
    category: "Sporting Goods",
    price: 35000,
    rating: 4.2,
    description: "A lightweight cardio essential for warmups and home routines.",
    badge: "Cardio Pick",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 67,
    name: "Tennis Racket Starter Set",
    category: "Sporting Goods",
    price: 189000,
    rating: 4.3,
    description: "A beginner-friendly set for casual training and recreation.",
    badge: "Starter Gear",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 68,
    name: "Cycling Helmet",
    category: "Sporting Goods",
    price: 129000,
    rating: 4.6,
    description: "Light protective support for city rides and weekend cycling routes.",
    badge: "Safety First",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 69,
    name: "Camping Sleeping Bag",
    category: "Sporting Goods",
    price: 179000,
    rating: 4.4,
    description: "Packable warmth for road trips, school camps, and outdoor stays.",
    badge: "Outdoor Camp",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 70,
    name: "Hydration Water Bottle",
    category: "Sporting Goods",
    price: 28000,
    rating: 4.1,
    description: "A reusable sports bottle for gym sessions, hikes, and school days.",
    badge: "Stay Ready",
    image: "https://images.pexels.com/photos/16513598/pexels-photo-16513598.jpeg?cs=srgb&dl=pexels-anete-lusina-16513598.jpg&fm=jpg",
    accentA: "#a8c285",
    accentB: "#4e6a21"
  },
  {
    id: 71,
    name: "Garden Watering Set",
    category: "Garden and Outdoors",
    price: 149000,
    rating: 4.2,
    description: "Helpful watering tools for compound plants, flowers, and everyday garden care.",
    badge: "Outdoor Use",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 72,
    name: "Steel Pruning Shears",
    category: "Garden and Outdoors",
    price: 58000,
    rating: 4.4,
    description: "Sharp compact shears for trimming hedges, stems, and home plants.",
    badge: "Clean Trim",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 73,
    name: "Outdoor Folding Chair",
    category: "Garden and Outdoors",
    price: 99000,
    rating: 4.3,
    description: "An easy seat for balconies, events, and flexible outdoor lounging.",
    badge: "Portable Seat",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 74,
    name: "Plant Pots Set",
    category: "Garden and Outdoors",
    price: 76000,
    rating: 4.2,
    description: "A matching set for herbs, flowers, and decorative indoor-outdoor plants.",
    badge: "Plant Corner",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 75,
    name: "Solar Garden Lights",
    category: "Garden and Outdoors",
    price: 135000,
    rating: 4.5,
    description: "Simple pathway lighting that charges in sunlight and adds evening ambiance.",
    badge: "Night Glow",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 76,
    name: "Hose Pipe 30m",
    category: "Garden and Outdoors",
    price: 112000,
    rating: 4.3,
    description: "Reliable reach for washing compounds, watering gardens, and outdoor cleaning.",
    badge: "Long Reach",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 77,
    name: "Charcoal Grill Stand",
    category: "Garden and Outdoors",
    price: 225000,
    rating: 4.6,
    description: "Weekend grilling support for meat, fish, and family gatherings.",
    badge: "Cookout",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 78,
    name: "Picnic Cooler Box",
    category: "Garden and Outdoors",
    price: 89000,
    rating: 4.4,
    description: "Keeps drinks and snacks chilled for travel, parks, and road days.",
    badge: "Day Out",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 79,
    name: "Patio Umbrella",
    category: "Garden and Outdoors",
    price: 259000,
    rating: 4.5,
    description: "Extra outdoor shade for gardens, cafes, and family seating areas.",
    badge: "Shade Pick",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  },
  {
    id: 80,
    name: "Seedling Tool Kit",
    category: "Garden and Outdoors",
    price: 47000,
    rating: 4.2,
    description: "Small hand tools for potting, transplanting, and balcony gardening.",
    badge: "Starter Kit",
    image: "https://images.pexels.com/photos/8543388/pexels-photo-8543388.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8543388.jpg&fm=jpg",
    accentA: "#78c9b1",
    accentB: "#1f7f62"
  }
];

const CATEGORY_ORDER = [
  "All",
  "Phones",
  "Home and Office",
  "Electronics",
  "Health and Beauty",
  "Fashion",
  "Computing",
  "Sporting Goods",
  "Garden and Outdoors"
];

const CART_STORAGE_KEY = "kampalacart-cart-v1";
const EMAIL_STORAGE_KEY = "kampalacart-email-v1";
const PRODUCT_IMAGE_OVERRIDES_KEY = "kampalacart-image-overrides-v1";
const ORDER_EMAIL = "oderoelijah38@gmail.com";
const WHATSAPP_NUMBER = "254105883177";
const SHIPPING_FEE = 15000;
const FREE_SHIPPING_THRESHOLD = 250000;
const MAX_ADMIN_IMAGE_FILE_SIZE = 2 * 1024 * 1024;

const state = {
  baseProducts: [],
  products: [],
  cart: loadCart(),
  accountView: "orders",
  activeCategory: "All",
  searchTerm: "",
  customerEmail: loadCustomerEmail(),
  imageOverrides: loadImageOverrides(),
  adminSelectedProductId: null,
  adminDraftImage: "",
  adminDraftUrl: ""
};

const elements = {
  productGrid: document.getElementById("product-grid"),
  categoryFilters: document.getElementById("category-filters"),
  searchInput: document.getElementById("search-input"),
  resultsCount: document.getElementById("results-count"),
  selectedCategory: document.getElementById("selected-category"),
  cartItems: document.getElementById("cart-items"),
  cartCount: document.getElementById("cart-count"),
  subtotal: document.getElementById("subtotal"),
  shipping: document.getElementById("shipping"),
  total: document.getElementById("total"),
  clearCart: document.getElementById("clear-cart"),
  emailOrderBtn: document.getElementById("email-order-btn"),
  whatsappOrderBtn: document.getElementById("whatsapp-order-btn"),
  cartStatus: document.getElementById("cart-status"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartOverlay: document.getElementById("cart-overlay"),
  productTotal: document.getElementById("product-total"),
  accountLinks: document.getElementById("account-links"),
  accountPanel: document.getElementById("account-panel"),
  signInForm: document.getElementById("sign-in-form"),
  emailInput: document.getElementById("email-input"),
  signInStatus: document.getElementById("sign-in-status"),
  signInBtn: document.getElementById("sign-in-btn"),
  adminImageForm: document.getElementById("admin-image-form"),
  adminProductSelect: document.getElementById("admin-product-select"),
  adminPreviewImage: document.getElementById("admin-preview-image"),
  adminProductName: document.getElementById("admin-product-name"),
  adminPreviewNote: document.getElementById("admin-preview-note"),
  adminImageUrl: document.getElementById("admin-image-url"),
  adminImageFile: document.getElementById("admin-image-file"),
  adminSaveImageBtn: document.getElementById("admin-save-image-btn"),
  adminResetImageBtn: document.getElementById("admin-reset-image-btn"),
  adminImageStatus: document.getElementById("admin-image-status")
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  state.baseProducts = await loadProducts();
  state.products = applyImageOverrides(state.baseProducts);
  state.adminSelectedProductId = state.products[0]?.id ?? null;
  renderCategoryFilters();
  renderProducts();
  renderCart();
  renderAccountView();
  renderSignInState();
  renderAdminImageEditor();
  elements.productTotal.textContent = String(state.products.length);
  wireEvents();
}

async function loadProducts() {
  try {
    const response = await fetch("data/products.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products = await response.json();
    if (!Array.isArray(products) || products.length === 0) {
      throw new Error("Product data is empty.");
    }

    return products;
  } catch (error) {
    console.warn("Using built-in product fallback.", error);
    return defaultProducts;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderProductVisual(product) {
  if (product.image) {
    return `<img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">`;
  }

  return `<span class="product-icon" aria-hidden="true">${escapeHtml(product.icon || product.name.charAt(0))}</span>`;
}

function renderCartThumb(product) {
  if (product.image) {
    return `<img class="cart-thumb-image" src="${escapeHtml(product.image)}" alt="" loading="lazy" decoding="async">`;
  }

  return `<span aria-hidden="true">${escapeHtml(product.icon || product.name.charAt(0))}</span>`;
}

function wireEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  elements.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) {
      return;
    }

    state.activeCategory = button.dataset.category;
    renderCategoryFilters();
    renderProducts();
  });

  elements.productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) {
      return;
    }

    addToCart(Number(button.dataset.addToCart));
  });

  elements.cartItems.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    const productId = Number(actionButton.dataset.productId);
    const action = actionButton.dataset.action;

    if (action === "increase") {
      updateQuantity(productId, 1);
    }

    if (action === "decrease") {
      updateQuantity(productId, -1);
    }

    if (action === "remove") {
      removeFromCart(productId);
    }
  });

  elements.clearCart.addEventListener("click", clearCart);
  elements.emailOrderBtn.addEventListener("click", openEmailOrder);
  elements.whatsappOrderBtn.addEventListener("click", openWhatsAppOrder);
  elements.cartToggle.addEventListener("click", () => setCartOpen(true));
  elements.cartClose.addEventListener("click", () => setCartOpen(false));
  elements.cartOverlay.addEventListener("click", () => setCartOpen(false));
  elements.accountLinks.addEventListener("click", (event) => {
    const button = event.target.closest("[data-account-view]");
    if (!button) {
      return;
    }

    state.accountView = button.dataset.accountView;
    renderAccountView();
  });

  elements.signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = elements.emailInput.value.trim();
    if (!email) {
      return;
    }

    state.customerEmail = email;
    saveCustomerEmail(email);
    renderSignInState();
  });

  elements.adminProductSelect.addEventListener("change", (event) => {
    state.adminSelectedProductId = Number(event.target.value) || null;
    clearAdminImageDraft();
    renderAdminImageEditor();
  });

  elements.adminImageUrl.addEventListener("input", (event) => {
    state.adminDraftUrl = event.target.value.trim();
    state.adminDraftImage = state.adminDraftUrl;

    if (state.adminDraftUrl) {
      elements.adminImageFile.value = "";
    }

    renderAdminImageEditor();
  });

  elements.adminImageFile.addEventListener("change", handleAdminImageFileChange);
  elements.adminImageForm.addEventListener("submit", saveAdminProductImage);
  elements.adminResetImageBtn.addEventListener("click", resetAdminProductImage);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      setCartOpen(false);
    }
  });
}

function renderCategoryFilters() {
  elements.categoryFilters.innerHTML = CATEGORY_ORDER.map(
    (category) => `
      <button
        class="filter-btn sidebar-link ${category === state.activeCategory ? "active" : ""}"
        type="button"
        data-category="${category}">
        ${category}
      </button>
    `
  ).join("");
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const categoryLabel = state.activeCategory === "All" ? "All categories" : state.activeCategory;

  elements.selectedCategory.textContent = categoryLabel;
  elements.resultsCount.textContent = `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}`;

  if (filteredProducts.length === 0) {
    elements.productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No matching products</h3>
        <p>Try another category or search term to find more items.</p>
      </div>
    `;
    return;
  }

  elements.productGrid.innerHTML = filteredProducts.map(
    (product) => `
      <article class="product-card">
        <div class="product-visual" style="--card-start: ${product.accentA}; --card-end: ${product.accentB};">
          <span class="product-badge">${escapeHtml(product.badge)}</span>
          ${renderProductVisual(product)}
        </div>

        <div class="product-content">
          <div class="product-meta">
            <span>${escapeHtml(product.category)}</span>
            <span>${escapeHtml(product.rating)} / 5</span>
          </div>

          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${escapeHtml(product.description)}</p>
          </div>

          <div class="product-footer">
            <span class="product-price">${formatCurrency(product.price)}</span>
            <button class="add-btn" type="button" data-add-to-cart="${product.id}">
              Add to cart
            </button>
          </div>
        </div>
      </article>
    `
  ).join("");
}

function renderCart() {
  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = `
      <div class="cart-empty">
        <h3>Your cart is empty</h3>
        <p>Add products from the catalog to prepare an order for email or WhatsApp.</p>
      </div>
    `;
  } else {
    elements.cartItems.innerHTML = state.cart.map((item) => {
      const product = findProduct(item.id);
      if (!product) {
        return "";
      }

      return `
        <article class="cart-item">
          <div class="cart-thumb" style="--card-start: ${product.accentA}; --card-end: ${product.accentB};">
            ${renderCartThumb(product)}
          </div>

          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${formatCurrency(product.price)} each</p>

            <div class="cart-item-actions">
              <div class="qty-controls" aria-label="Quantity controls">
                <button class="qty-btn" type="button" data-action="decrease" data-product-id="${product.id}">-</button>
                <strong>${item.quantity}</strong>
                <button class="qty-btn" type="button" data-action="increase" data-product-id="${product.id}">+</button>
              </div>

              <button class="remove-btn" type="button" data-action="remove" data-product-id="${product.id}">
                Remove
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  const totals = calculateTotals();

  elements.cartCount.textContent = String(totals.itemCount);
  elements.subtotal.textContent = formatCurrency(totals.subtotal);
  elements.shipping.textContent = totals.shipping === 0 && totals.subtotal > 0 ? "Free" : formatCurrency(totals.shipping);
  elements.total.textContent = formatCurrency(totals.total);
  elements.clearCart.disabled = state.cart.length === 0;
  elements.emailOrderBtn.disabled = state.cart.length === 0;
  elements.whatsappOrderBtn.disabled = state.cart.length === 0;
}

function renderSignInState() {
  if (state.customerEmail) {
    elements.emailInput.value = state.customerEmail;
    elements.signInStatus.textContent = `Signed in as ${state.customerEmail}`;
    elements.signInBtn.textContent = "Update email";
  } else {
    elements.emailInput.value = "";
    elements.signInStatus.textContent = "Not signed in yet.";
    elements.signInBtn.textContent = "Sign in";
  }

  renderAccountView();
}

function renderAccountView() {
  if (!elements.accountPanel || !elements.accountLinks) {
    return;
  }

  const { title, description, details } = getAccountViewData();

  Array.from(elements.accountLinks.querySelectorAll("[data-account-view]")).forEach((button) => {
    button.classList.toggle("active", button.dataset.accountView === state.accountView);
  });

  elements.accountPanel.innerHTML = `
    <p class="account-panel-label">Customer view</p>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(description)}</p>
    <div class="account-details">
      ${details.map((detail) => `
        <div class="account-detail">
          <strong>${escapeHtml(detail.label)}</strong>
          <span>${escapeHtml(detail.value)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function getAccountViewData() {
  const cartTotals = calculateTotals();
  const shopperLabel = state.customerEmail || "Guest shopper";

  if (state.accountView === "reviews") {
    return {
      title: "Pending Reviews",
      description: "Completed orders will appear here when there is feedback ready for you to leave.",
      details: [
        { label: "Customer", value: shopperLabel },
        { label: "Reviews waiting", value: "0 items" },
        { label: "Next step", value: "Place an order first to unlock product reviews." }
      ]
    };
  }

  if (state.accountView === "wishlist") {
    return {
      title: "Wishlist",
      description: "Keep track of products you want to come back to while you continue shopping.",
      details: [
        { label: "Customer", value: shopperLabel },
        { label: "Shopping now", value: `${cartTotals.itemCount} item${cartTotals.itemCount === 1 ? "" : "s"} in cart` },
        { label: "Tip", value: "Use your cart to hold favorites before placing an order." }
      ]
    };
  }

  if (state.accountView === "vouchers") {
    return {
      title: "Vouchers",
      description: "Special savings and offer codes will show up here whenever they are available.",
      details: [
        { label: "Customer", value: shopperLabel },
        { label: "Available now", value: "No vouchers yet" },
        { label: "Reminder", value: "Check back later for shopping offers and discounts." }
      ]
    };
  }

  return {
    title: "Orders",
    description: "Track your current shopping progress here before placing your next order.",
    details: [
      { label: "Customer", value: shopperLabel },
      { label: "Cart status", value: cartTotals.itemCount === 0 ? "No items added yet" : `${cartTotals.itemCount} item${cartTotals.itemCount === 1 ? "" : "s"} ready to order` },
      { label: "Order total", value: formatCurrency(cartTotals.total) }
    ]
  };
}

function renderAdminImageEditor() {
  if (!elements.adminProductSelect) {
    return;
  }

  if (!state.adminSelectedProductId && state.products.length > 0) {
    state.adminSelectedProductId = state.products[0].id;
  }

  elements.adminProductSelect.innerHTML = state.products.map((product) => `
    <option value="${product.id}">${escapeHtml(product.name)}</option>
  `).join("");

  const product = findProduct(state.adminSelectedProductId);
  if (!product) {
    elements.adminProductName.textContent = "No product selected";
    elements.adminPreviewNote.textContent = "Add products before editing their images.";
    elements.adminPreviewImage.src = "";
    elements.adminPreviewImage.alt = "";
    elements.adminSaveImageBtn.disabled = true;
    elements.adminResetImageBtn.disabled = true;
    return;
  }

  const currentPreviewImage = state.adminDraftImage || product.image || "";
  const hasOverride = Boolean(state.imageOverrides[String(product.id)]);

  elements.adminProductSelect.value = String(product.id);
  elements.adminProductName.textContent = product.name;
  elements.adminPreviewImage.src = currentPreviewImage;
  elements.adminPreviewImage.alt = `${product.name} preview`;
  elements.adminPreviewNote.textContent = state.adminDraftImage
    ? "Previewing your new image before saving."
    : hasOverride
      ? "This product is using a custom image saved on this device."
      : "This product is using its original catalog image.";
  elements.adminImageUrl.value = state.adminDraftUrl;
  elements.adminSaveImageBtn.disabled = false;
  elements.adminResetImageBtn.disabled = !hasOverride && !state.adminDraftImage;
}

function getFilteredProducts() {
  return state.products.filter((product) => {
    const matchesCategory = state.activeCategory === "All" || product.category === state.activeCategory;
    const searchTarget = `${product.name} ${product.description} ${product.category}`.toLowerCase();
    const matchesSearch = searchTarget.includes(state.searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  syncCart();

  if (window.innerWidth <= 1100) {
    setCartOpen(true);
  }
}

function updateQuantity(productId, change) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) {
    return;
  }

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  syncCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  syncCart();
}

function clearCart() {
  state.cart = [];
  syncCart();
}

async function handleAdminImageFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) {
    clearAdminImageDraft();
    renderAdminImageEditor();
    return;
  }

  if (!file.type.startsWith("image/")) {
    clearAdminImageDraft();
    elements.adminImageFile.value = "";
    showAdminImageStatus("Choose a valid image file.");
    renderAdminImageEditor();
    return;
  }

  if (file.size > MAX_ADMIN_IMAGE_FILE_SIZE) {
    clearAdminImageDraft();
    elements.adminImageFile.value = "";
    showAdminImageStatus("Choose an image under 2 MB so it can be saved in the browser.");
    renderAdminImageEditor();
    return;
  }

  try {
    state.adminDraftImage = await readFileAsDataUrl(file);
    state.adminDraftUrl = "";
    elements.adminImageUrl.value = "";
    showAdminImageStatus(`Loaded ${file.name}. Save to apply it to the selected product.`);
    renderAdminImageEditor();
  } catch (error) {
    console.warn("Could not read admin image file.", error);
    clearAdminImageDraft();
    elements.adminImageFile.value = "";
    showAdminImageStatus("That file could not be read. Try another image.");
    renderAdminImageEditor();
  }
}

async function saveAdminProductImage(event) {
  event.preventDefault();

  const product = findProduct(state.adminSelectedProductId);
  if (!product) {
    showAdminImageStatus("Choose a product before saving an image.");
    return;
  }

  const nextImage = state.adminDraftImage || state.adminDraftUrl.trim();
  if (!nextImage) {
    showAdminImageStatus("Paste an image URL or upload an image first.");
    return;
  }

  elements.adminSaveImageBtn.disabled = true;
  showAdminImageStatus("Checking the image and saving your change...");

  const isValidImage = await validateImageSource(nextImage);
  if (!isValidImage) {
    elements.adminSaveImageBtn.disabled = false;
    showAdminImageStatus("That image could not be loaded. Try another URL or file.");
    renderAdminImageEditor();
    return;
  }

  const productIdKey = String(product.id);
  const previousOverrides = { ...state.imageOverrides };
  state.imageOverrides[productIdKey] = nextImage;

  if (!saveImageOverrides()) {
    state.imageOverrides = previousOverrides;
    elements.adminSaveImageBtn.disabled = false;
    showAdminImageStatus("The new image could not be saved in this browser.");
    renderAdminImageEditor();
    return;
  }

  state.products = applyImageOverrides(state.baseProducts);
  clearAdminImageDraft();
  renderProducts();
  renderCart();
  renderAdminImageEditor();
  showAdminImageStatus(`${product.name} image updated successfully.`);
}

function resetAdminProductImage() {
  const product = findProduct(state.adminSelectedProductId);
  if (!product) {
    return;
  }

  const productIdKey = String(product.id);
  const hasOverride = Boolean(state.imageOverrides[productIdKey]);
  const hasDraft = Boolean(state.adminDraftImage || state.adminDraftUrl || elements.adminImageFile.value);

  clearAdminImageDraft();

  if (!hasOverride) {
    renderAdminImageEditor();
    if (hasDraft) {
      showAdminImageStatus("Draft image cleared.");
    }
    return;
  }

  const previousOverrides = { ...state.imageOverrides };
  delete state.imageOverrides[productIdKey];

  if (!saveImageOverrides()) {
    state.imageOverrides = previousOverrides;
    renderAdminImageEditor();
    showAdminImageStatus("The original image could not be restored right now.");
    return;
  }

  state.products = applyImageOverrides(state.baseProducts);
  renderProducts();
  renderCart();
  renderAdminImageEditor();
  showAdminImageStatus(`${product.name} has been reset to its original image.`);
}

function openEmailOrder() {
  if (state.cart.length === 0) {
    return;
  }

  openExternalLink(buildEmailOrderUrl());
  showCartStatus("A Gmail draft is opening in a new tab for your order.");
}

function openWhatsAppOrder() {
  if (state.cart.length === 0) {
    return;
  }

  const message = encodeURIComponent(buildOrderMessage());
  openExternalLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`);
}

function buildOrderMessage() {
  const totals = calculateTotals();
  const itemLines = state.cart.map((item) => {
    const product = findProduct(item.id);
    if (!product) {
      return "";
    }

    const lineTotal = product.price * item.quantity;
    return `- ${product.name} x${item.quantity} = ${formatCurrency(lineTotal)}`;
  }).filter(Boolean).join("\n");

  const shippingLine = totals.shipping === 0 && totals.subtotal > 0 ? "Free" : formatCurrency(totals.shipping);
  const customerLine = state.customerEmail ? state.customerEmail : "Not provided";

  return [
    "Hello, I would like to place this order from 734m Shop Uganda.",
    "",
    `Customer email: ${customerLine}`,
    "",
    "Items:",
    itemLines,
    "",
    `Subtotal: ${formatCurrency(totals.subtotal)}`,
    `Shipping: ${shippingLine}`,
    `Total: ${formatCurrency(totals.total)}`,
    "",
    "Please confirm stock availability and delivery details."
  ].join("\n");
}

function buildEmailOrderUrl() {
  const url = new URL("https://mail.google.com/mail/");
  url.searchParams.set("view", "cm");
  url.searchParams.set("fs", "1");
  url.searchParams.set("to", ORDER_EMAIL);
  url.searchParams.set("su", "New 734m Shop Order");
  url.searchParams.set("body", buildOrderMessage());
  return url.toString();
}

function showCartStatus(message) {
  if (!elements.cartStatus) {
    return;
  }

  elements.cartStatus.textContent = message;
}

function openExternalLink(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function calculateTotals() {
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => {
    const product = findProduct(item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;

  return {
    itemCount,
    subtotal,
    shipping,
    total: subtotal + shipping
  };
}

function findProduct(productId) {
  return state.products.find((entry) => entry.id === productId) || defaultProducts.find((entry) => entry.id === productId) || null;
}

function applyImageOverrides(products) {
  return products.map((product) => {
    const overrideImage = state.imageOverrides[String(product.id)];
    return overrideImage ? { ...product, image: overrideImage } : { ...product };
  });
}

function clearAdminImageDraft() {
  state.adminDraftImage = "";
  state.adminDraftUrl = "";

  if (elements.adminImageUrl) {
    elements.adminImageUrl.value = "";
  }

  if (elements.adminImageFile) {
    elements.adminImageFile.value = "";
  }
}

function showAdminImageStatus(message) {
  if (!elements.adminImageStatus) {
    return;
  }

  elements.adminImageStatus.textContent = message;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(String(reader.result || ""));
    });

    reader.addEventListener("error", () => {
      reject(reader.error || new Error("Could not read file."));
    });

    reader.readAsDataURL(file);
  });
}

function validateImageSource(source) {
  return new Promise((resolve) => {
    const image = new Image();
    const timeoutId = window.setTimeout(() => {
      cleanup();
      resolve(false);
    }, 8000);

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      image.onload = null;
      image.onerror = null;
    };

    image.onload = () => {
      cleanup();
      resolve(true);
    };

    image.onerror = () => {
      cleanup();
      resolve(false);
    };

    image.src = source;
  });
}

function syncCart() {
  saveCart();
  renderCart();
  renderAccountView();

  if (elements.cartStatus) {
    elements.cartStatus.textContent = "";
  }
}

function setCartOpen(isOpen) {
  document.body.classList.toggle("cart-open", isOpen);
  elements.cartOverlay.hidden = !isOpen;
}

function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.warn("Could not load saved cart.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (error) {
    console.warn("Could not save cart.", error);
  }
}

function loadCustomerEmail() {
  try {
    return localStorage.getItem(EMAIL_STORAGE_KEY) || "";
  } catch (error) {
    console.warn("Could not load saved email.", error);
    return "";
  }
}

function saveCustomerEmail(email) {
  try {
    localStorage.setItem(EMAIL_STORAGE_KEY, email);
  } catch (error) {
    console.warn("Could not save customer email.", error);
  }
}

function loadImageOverrides() {
  try {
    const savedOverrides = localStorage.getItem(PRODUCT_IMAGE_OVERRIDES_KEY);
    if (!savedOverrides) {
      return {};
    }

    const parsedOverrides = JSON.parse(savedOverrides);
    return parsedOverrides && typeof parsedOverrides === "object" ? parsedOverrides : {};
  } catch (error) {
    console.warn("Could not load saved product image overrides.", error);
    return {};
  }
}

function saveImageOverrides() {
  try {
    localStorage.setItem(PRODUCT_IMAGE_OVERRIDES_KEY, JSON.stringify(state.imageOverrides));
    return true;
  } catch (error) {
    console.warn("Could not save product image overrides.", error);
    return false;
  }
}

function formatCurrency(value) {
  return `UGX ${new Intl.NumberFormat("en-UG", {
    maximumFractionDigits: 0
  }).format(value)}`;
}
