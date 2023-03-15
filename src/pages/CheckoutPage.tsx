import { Button, Heading, useMediaQuery } from "@chakra-ui/react";
import { useCart } from "../CartContext";

export function CheckoutPage() {

  const { cartList, addToCart, removeFromCart } = useCart();
  const [isSmallerThan1042] = useMediaQuery('(max-width: 1156px)');


  return (
    <div>
      <Heading>This is checkout page!</Heading>
      <ul>
        {cartList.map((cartItem) => (
          <li key={cartItem.id}>
            <p>{cartItem.title}</p>
            <img src={cartItem.image} style={{ width: '100px' }} />
            <p>{cartItem.price} kr</p>
            <p>{cartItem.description}</p>
            <p>quantity: {cartItem.quantity}</p>
            <p>Total price: {cartItem.quantity*cartItem.price}</p>
            <Button onClick={() => addToCart(cartItem)}>Add to cart!</Button>
            <Button onClick={() => removeFromCart(cartItem.id)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

