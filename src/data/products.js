import whiteProductImage from '../assets/images/white.png'
import blackProductImage from '../assets/images/black.png'

export const products = [
  {
    id: 1,
    name: "White Edition",
    slug: "white-edition",
    price: 1499,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 234,
    image: whiteProductImage,
    images: [
      whiteProductImage,
      whiteProductImage,
      whiteProductImage
    ],
    category: "Supplements",
    description: "Pure organic herbal blend in premium white packaging",
    shortDescription: "Elegant and minimal for everyday wellness",
    ingredients: "Organic Ashwagandha Root Powder, Organic Tulsi Extract, Vegetarian Capsule",
    benefits: [
      "Reduces stress and anxiety",
      "Boosts energy and stamina",
      "Improves sleep quality",
      "Enhances cognitive function"
    ],
    howToUse: "Take 1-2 capsules daily with water, preferably after meals",
    specifications: {
      weight: "60 capsules",
      type: "Capsules",
      origin: "India",
      shelfLife: "24 months"
    },
    stock: 45,
    offer: "20% OFF"
  },
  {
    id: 2,
    name: "Black Edition",
    slug: "black-edition",
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 312,
    image: blackProductImage,
    images: [
      blackProductImage,
      blackProductImage,
      blackProductImage
    ],
    category: "Supplements",
    description: "Premium herbal blend in sophisticated black packaging",
    shortDescription: "Bold and powerful for enhanced potency",
    ingredients: "Organic Ashwagandha Root Powder, Organic Shilajit Extract, Vegetarian Capsule",
    benefits: [
      "Boosts immune system",
      "Supports respiratory health",
      "Natural detoxifier",
      "Enhances vitality"
    ],
    howToUse: "Take 1-2 capsules daily with water, preferably after meals",
    specifications: {
      weight: "60 capsules",
      type: "Capsules",
      origin: "India",
      shelfLife: "24 months"
    },
    stock: 38,
    offer: "17% OFF"
  }
]
