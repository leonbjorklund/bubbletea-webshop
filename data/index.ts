export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  bgColor: string;

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
    title: "Brown sugar Fresh Milk",
    description: "Description of the drink!",
    price: 6.50,
    bgColor: "yellowCardCircle"
  },
  {
    id: "2",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Taro Latte",
    description: "Description of the drink!",
    price: 6.50,
    bgColor: "bigMatchaCard"
  },
  {
    id: "3",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Milk Tea",
    description: "Description of the drink!",
    price: 6.50,
    bgColor: "fruitTeaCircle"
  },
  {
    id: "4",
    image: "/images/greenboba.png",
    imageAlt: "boba",
    title: "Matcha Latte",
    description: "Description of the drink!",
    price: 6.50,
    bgColor: "bigMatchaCard"
  },
  {
    id: "5",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Thai Iced Tea",
    description: "Description of the drink!",
    price: 6.50,
    bgColor: "yellowCardCircle"
  },
  {
    id: "6",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Peach Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    bgColor: "fruitTeaCircle"
  },
  {
    id: "7",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Passion Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    bgColor: "fruitTeaCircle"
  },
  {
    id: "8",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Strawberry Fruit Tea",
    description: "Description of the drink!", 
    price: 6.00,
    bgColor: "yellowCardCircle"
  },
  {
    id: "9",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Blueberry Fruit Tea",
    description: "Description of the drink!",
    price: 6.00,
    bgColor: "bigMatchaCard"
  },
  {
    id: "10",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Oolong Tea",
    description: "Description of the drink!",
    price: 6.00,
    bgColor: "yellowCardCircle"
  },
];


