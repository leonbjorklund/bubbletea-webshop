export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}


export const products: Product[] = [
  {
    id: "1",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Bubble_Tea.png",
    title: "Brown sugar Boba",
    description: "Description of the drink!",
    price: 49,
  },
  {
    id: "2",
    // image: "https://cdn.shopify.com/s/files/1/0285/0082/0054/products/strawberry_bubble_tea_web_1_815x.jpg?v=1675471018",
    image: "http://127.0.0.1:5173/images/image.webp",
    title: "Boba",
    description: "Description of the drink!",
    price: 59,
  },
];

//
// http://127.0.0.1:5173/images/image1.jpg

// http://127.0.0.1:5173/public/images/strawberry_bubble_tea_web_1_815x.webp