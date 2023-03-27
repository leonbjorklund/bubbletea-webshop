export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  allergens: string;
  ingredients: string;
  bgColor: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// /images/yellowboba.png"
// /images/pinkboba.png"
// /images/greenboba.png"

export const products: Product[] = [
  {
    id: "1",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Brown sugar Milk",
    description: "Description of the drink!",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, brown sugar syrup, tapioca pearls(tapioca starch, water)",
    bgColor: "yellow",
    category: "milk"
  },
  {
    id: "2",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Taro Latte",
    description: "Description of the drink!",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, taro powder(taro extract, taro flavor, maltodextrin) tapioca pearls (tapioca starch, water)",
    bgColor: "bigMatchaCard",
    category: "milk"
  },
  {
    id: "3",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Milk Tea",
    description: "Description of the drink!",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, black tea, tapioca pearls(tapioca starch, water)",
    bgColor: "#EEA6B4",
    category: "milk"
  },
  {
    id: "4",
    image: "/images/greenboba.png",
    imageAlt: "boba",
    title: "Matcha Latte",
    description: "Description of the drink!",
    price: 6.50,
    allergens: "Gluten",
    ingredients: "Oat milk, matcha, tapioca pearls (tapioca starch, water)",
    bgColor: "bigMatchaCard",
    category: "milk"
  },
  {
    id: "5",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Thai Iced Tea",
    description: "Description of the drink!",
    price: 6.50,
    allergens: "",
    ingredients: "Black tea, sugar, condensed milk, spices(anise, cardamom, cinnamon, vanilla bean, almond extract) tapioca pearls (tapioca starch, water)",
    bgColor: "yellowCardCircle",
    category: "milk"
  },
  {
    id: "6",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Peach Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, peach syrup(fructose, water, sugar, peach concentrate, acidity regulator, thickener, preservative), sugar, peach pearls(fructose, peach juice, starch, gelling agent)",
    bgColor: "#EEA6B4",
    category: "fruit"
  },
  {
    id: "7",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Passion Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, passion syrup(fructose, water, sugar, passion concentrate, acidity regulator, thickener, preservative), sugar, peach pearls(fructose, passion juice, starch, gelling agent)",
    bgColor: "#EEA6B4",
    category: "fruit"
  },
  {
    id: "8",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Strawberry Fruit Tea",
    description: "Description of the drink!", 
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, strawberry syrup(fructose, water, sugar, strawberry concentrate, acidity regulator, thickener, preservative), sugar, strawberry pearls(fructose, strawberry juice, starch, gelling agent)",
    bgColor: "yellowCardCircle",
    category: "fruit"
  },
  {
    id: "9",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Blueberry Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, blueberry syrup(fructose, water, sugar, blueberry concentrate, acidity regulator, thickener, preservative), sugar, blueberry pearls(fructose, blueberry juice, starch, gelling agent)",
    bgColor: "bigMatchaCard",
    category: "fruit"
  },
  {
    id: "10",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Oolong Tea",
    description: "Description of the drink!",
    price: 6.00,
    allergens: "",
    ingredients: "Water, oolong tea, fructose, tapioca pearls(tapioca starch, water",
    bgColor: "yellowCardCircle",
    category: "milk"
  },
];


