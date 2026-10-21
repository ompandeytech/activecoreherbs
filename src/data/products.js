import blackProductImage from '../assets/images/black.png'

export const products = [
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
  }
]

export const getDiscountPercentage = ({ price, originalPrice }) =>
  `${Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF`
