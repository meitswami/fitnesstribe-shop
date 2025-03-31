
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Rubber Coated Dumbbell Set",
    price: 149.99,
    discountPercentage: 15,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
    ],
    description: "Professional-grade rubber coated dumbbell set with ergonomic handles for superior grip. This set includes pairs of 5lb, 10lb, and 15lb weights perfect for home workouts. The rubber coating minimizes noise and protects your floors, while the hexagonal design prevents rolling.",
    category: "gym_equipment",
    activity: ["gym"],
    brand: "fitgear",
    variants: [
      {
        id: "1-1",
        weight: "5lb Pair",
      },
      {
        id: "1-2",
        weight: "10lb Pair",
      },
      {
        id: "1-3",
        weight: "15lb Pair",
      },
      {
        id: "1-4",
        weight: "Complete Set",
      },
    ],
    featured: true,
    rating: 4.8,
    stock: 25
  },
  {
    id: "2",
    name: "Ultra Flex Yoga Mat",
    price: 59.99,
    discountPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop",
    ],
    description: "Premium 6mm thick yoga mat with alignment lines for perfect positioning. This eco-friendly, non-slip mat is ideal for all yoga styles and fitness levels. Features a carrying strap for easy transport to and from your yoga studio.",
    category: "yoga_meditation",
    activity: ["yoga"],
    brand: "fitgear",
    variants: [
      {
        id: "2-1",
        color: "Purple",
      },
      {
        id: "2-2",
        color: "Blue",
      },
      {
        id: "2-3",
        color: "Black",
      },
    ],
    featured: true,
    rating: 4.7,
    stock: 50
  },
  {
    id: "3",
    name: "Pro Performance Running Shoes",
    price: 129.99,
    discountPercentage: 25,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop",
    ],
    description: "Lightweight, breathable running shoes with responsive cushioning for maximum comfort and performance. These shoes feature a flexible mesh upper and durable rubber outsole for traction on various surfaces. Perfect for both casual joggers and serious runners.",
    category: "sportswear",
    activity: ["running"],
    brand: "nike",
    variants: [
      {
        id: "3-1",
        size: "8",
        color: "Red/Black",
      },
      {
        id: "3-2",
        size: "9",
        color: "Red/Black",
      },
      {
        id: "3-3",
        size: "10",
        color: "Red/Black",
      },
      {
        id: "3-4",
        size: "11",
        color: "Red/Black",
      },
    ],
    featured: false,
    rating: 4.9,
    stock: 35
  },
  {
    id: "4",
    name: "Adjustable Kettlebell",
    price: 89.99,
    discountPercentage: 10,
    images: [
      "https://images.unsplash.com/photo-1603455778956-d71d2a197e7a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585152968992-d2b9444408cc?w=800&auto=format&fit=crop",
    ],
    description: "Space-saving adjustable kettlebell that replaces 5 individual kettlebells. Quickly change the weight from 5-25lbs with a simple dial mechanism. Perfect for kettlebell swings, squats, and presses in your home gym setup.",
    category: "gym_equipment",
    activity: ["gym"],
    brand: "fitgear",
    variants: [
      {
        id: "4-1",
        weight: "5-25 lbs",
      },
      {
        id: "4-2",
        weight: "15-35 lbs",
      },
    ],
    featured: true,
    rating: 4.6,
    stock: 20
  },
  {
    id: "5",
    name: "Compression Fitness Leggings",
    price: 49.99,
    discountPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517637382994-f02da38c6728?w=800&auto=format&fit=crop",
    ],
    description: "High-waisted compression leggings with moisture-wicking fabric for maximum comfort during workouts. Features a handy side pocket for your phone and a supportive waistband that stays in place during even the most intense exercises.",
    category: "sportswear",
    activity: ["gym", "running", "yoga"],
    brand: "under_armour",
    variants: [
      {
        id: "5-1",
        size: "S",
        color: "Black",
      },
      {
        id: "5-2",
        size: "M",
        color: "Black",
      },
      {
        id: "5-3",
        size: "L",
        color: "Black",
      },
      {
        id: "5-4",
        size: "S",
        color: "Navy",
      },
      {
        id: "5-5",
        size: "M",
        color: "Navy",
      },
      {
        id: "5-6",
        size: "L",
        color: "Navy",
      },
    ],
    featured: false,
    rating: 4.5,
    stock: 45
  },
  {
    id: "6",
    name: "Collapsible Water Bottle",
    price: 24.99,
    discountPercentage: 5,
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555467825-21dc436ab646?w=800&auto=format&fit=crop",
    ],
    description: "Space-saving collapsible water bottle made from BPA-free silicone. This 20oz bottle collapses to half its size when empty, making it perfect for hiking, running, or everyday use. Features a leakproof lid and carabiner attachment.",
    category: "outdoor_adventure",
    activity: ["outdoor", "running", "gym"],
    brand: "fitgear",
    variants: [
      {
        id: "6-1",
        color: "Blue",
      },
      {
        id: "6-2",
        color: "Green",
      },
      {
        id: "6-3",
        color: "Pink",
      },
    ],
    featured: false,
    rating: 4.3,
    stock: 60
  },
  {
    id: "7",
    name: "Smart Fitness Tracker",
    price: 129.99,
    discountPercentage: 0,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop",
    ],
    description: "Comprehensive fitness tracker with heart rate monitoring, sleep tracking, and GPS. This waterproof device features a color touchscreen, 7-day battery life, and smart notifications. Perfect for tracking all your fitness activities and daily health metrics.",
    category: "recovery_wellness",
    activity: ["gym", "running", "outdoor"],
    brand: "fitgear",
    variants: [
      {
        id: "7-1",
        color: "Black",
      },
      {
        id: "7-2",
        color: "Silver",
      },
    ],
    featured: true,
    rating: 4.7,
    stock: 15
  },
  {
    id: "8",
    name: "Performance Athletic Socks",
    price: 19.99,
    discountPercentage: 20,
    images: [
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608461864721-a1a555682616?w=800&auto=format&fit=crop",
    ],
    description: "Pack of 6 cushioned athletic socks with arch support and moisture-wicking fabric. These durable socks feature a reinforced heel and toe area for longer wear, and mesh panels for improved breathability during intense workouts.",
    category: "sportswear",
    activity: ["gym", "running"],
    brand: "adidas",
    variants: [
      {
        id: "8-1",
        size: "S",
        color: "Mixed Colors",
      },
      {
        id: "8-2",
        size: "M",
        color: "Mixed Colors",
      },
      {
        id: "8-3",
        size: "L",
        color: "Mixed Colors",
      },
    ],
    featured: false,
    rating: 4.4,
    stock: 75
  },
  {
    id: "9",
    name: "Foam Roller",
    price: 34.99,
    discountPercentage: 10,
    images: [
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    ],
    description: "High-density foam roller for muscle recovery and myofascial release. This 18-inch roller features a textured surface for targeting trigger points and relieving muscle tension after workouts. Ideal for recovery routines and improving flexibility.",
    category: "recovery_wellness",
    activity: ["gym", "running", "yoga"],
    brand: "fitgear",
    variants: [
      {
        id: "9-1",
        color: "Blue",
      },
      {
        id: "9-2",
        color: "Black",
      },
    ],
    featured: false,
    rating: 4.6,
    stock: 30
  },
  {
    id: "10",
    name: "Bluetooth Wireless Earbuds",
    price: 79.99,
    discountPercentage: 15,
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618329340733-ab49d9a5763c?w=800&auto=format&fit=crop",
    ],
    description: "Sweat-resistant wireless earbuds with 8-hour battery life and secure-fit design. These lightweight earbuds deliver premium sound quality and feature a built-in microphone for calls. Includes a pocket-sized charging case for on-the-go power.",
    category: "recovery_wellness",
    activity: ["gym", "running", "outdoor"],
    brand: "under_armour",
    variants: [
      {
        id: "10-1",
        color: "Black",
      },
      {
        id: "10-2",
        color: "White",
      },
    ],
    featured: true,
    rating: 4.5,
    stock: 40
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discountPercentage && product.discountPercentage > 0);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
