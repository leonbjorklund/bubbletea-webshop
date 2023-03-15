import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { CartCard } from "../components/CartCard";
import { ProductsLayout } from "../layout/ProductsLayout";

export function CheckoutPage() {

  const { cartList, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <Heading>This is checkout/cart page!</Heading>
      <Grid maxWidth="container.xl" templateColumns="3fr 1fr" my="30px">
        <GridItem>
          <ProductsLayout />
        </GridItem>

        <GridItem as="aside">
          <CartCard />
        </GridItem>

      </Grid>
    </div>
  )
}

{/* <ul>
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
</ul> */}