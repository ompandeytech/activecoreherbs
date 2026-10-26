import blackProductImage from '../assets/images/black.png'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'

export const products = [
  {
    id: 2,
    name: "Black Edition",
    slug: "black-edition",
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 312,
    image: img1,
    images: [
      img1,
      img2,
      img3,
      img4,
      img5
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
