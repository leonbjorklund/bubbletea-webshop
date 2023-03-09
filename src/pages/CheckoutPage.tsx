import { Button, Container, Heading } from "@chakra-ui/react";
import { useCart } from "../CartContext";

export function CheckoutPage() {

  const { cartList, addToCart, removeFromCart } = useCart();

  return (
    <Container maxWidth="4xl" my="30px">
      <Heading>This is checkout/cart page!</Heading>
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
    </Container>
  )
}
