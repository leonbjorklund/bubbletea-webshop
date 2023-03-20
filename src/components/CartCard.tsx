import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack, Link as ChakraLink, ListItem,
  SystemStyleObject,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function CartCard() {

  const { addToCart, removeFromCart, cartList } = useCart();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <Card sx={cartStyle}>
      <Flex sx={flexStyle}>
        <CardHeader p="5px">
          <Heading size="md">Cart</Heading>
        </CardHeader>
        <CardBody width="100%" p="0">
          {cartList.length > 0 ? (
            <UnorderedList listStyleType="none" marginInlineStart="0">
              {cartList.map((cartItem) => (
                <ListItem key={cartItem.id}>
                  <Flex sx={cartItemStyle}>
                    <HStack marginRight="0.5rem">
                      <Button
                        sx={incrementButtonStyle}
                        onClick={() => removeFromCart(cartItem.id)}
                      >
                        -
                      </Button>
                      <Text sx={quantityStyle}>{cartItem.quantity}</Text>
                      <Button
                        sx={incrementButtonStyle}
                        onClick={() => addToCart(cartItem)}
                      >
                        +
                      </Button>
                    </HStack>
                    <Text flex={1} textAlign="left">
                      {cartItem.title}
                    </Text>
                    <Text>${cartItem.quantity * cartItem.price}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
              <Heading textAlign="center" size="md">Your cart is empty!</Heading>
          )}
        </CardBody>
        <CardFooter sx={cardFooterStyle}>
          <Divider opacity="1" />
          <Flex my="0.625rem" width="100%" justifyContent="space-between">
            <Text>Total:</Text>
            <Text>${totalPrice}</Text>
          </Flex>
          <ChakraLink as={RouterLink} to="/checkout"><Button sx={orderButtonStyle}>Order</Button></ChakraLink>
        </CardFooter>
      </Flex>
    </Card>
  );
}

const cartStyle: SystemStyleObject = {
  marginTop: "var(--chakra-space-1)",
  bg: "#FFF9F4",
  border: "1px solid rgb(0,0,0, 0.2)",
  borderRadius: "0.625rem",
  padding: "1rem",
  position: "relative",
};

const flexStyle: SystemStyleObject = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "1.25rem",
};

const cartItemStyle: SystemStyleObject = {
  alignItems: "center",
  my: "0.625rem",
};

const incrementButtonStyle: SystemStyleObject = {
  bg: "pinkCardButton",
  marginStart: "0!important",
  marginEnd: "0!important",
};

const quantityStyle: SystemStyleObject = {
  m: "0",
  w: "1.375rem",
  textAlign: "center",
  marginStart: "0!important",
};

const orderButtonStyle: SystemStyleObject = {
  width: "100%",
  bg: "lightGreenButton",
  color: "black",
};

const cardFooterStyle: SystemStyleObject = {
  width: "100%",
  display: "block",
  p: "0",
}