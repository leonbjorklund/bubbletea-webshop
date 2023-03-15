import { Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { CartCard } from "../components/CartCard";
import { ProductsLayout } from "../layout/ProductsLayout";

export function CheckoutPage() {

  const { cartList, addToCart, removeFromCart } = useCart();
  const [isSmallerThan1042] = useMediaQuery('(max-width: 1156px)');


  return (
    <div>
      <Heading>This is checkout/cart page!</Heading>
      <Grid
      mx="auto"
      maxW="container.xl"
      templateColumns="3fr 1fr"
      my="30px"
      columnGap="20px"
      px={isSmallerThan1042 ? "20px" : "20px"} // set px to 35px when screen width is less than 1042px, otherwise set it to 20px
      >
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