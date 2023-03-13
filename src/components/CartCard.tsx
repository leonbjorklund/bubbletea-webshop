import { Button, Card, CardBody, CardHeader, Flex, Heading, ListItem, SystemStyleObject, Text, UnorderedList } from "@chakra-ui/react";
import { products } from "../../data";
import { useCart } from "../CartContext";

export function CartCard() {

  const { addToCart, removeFromCart, cartList } = useCart();

  return (
    <Card width="20rem" sx={cartStyle}>
      <Flex sx={flexStyle}>
      <CardHeader p="5px">
        <Heading size='md'>Cart</Heading>
      </CardHeader>
      <CardBody width="100%" p="0">
      <UnorderedList listStyleType="none" marginInlineStart="0">
        <ListItem my="5px" display="flex">
          <Button colorScheme="blue" onClick={() => removeFromCart(products[0].id)}>
           -
          </Button>
          <Text>{cartList.length}</Text>
          <Button colorScheme="blue" onClick={() => addToCart(products[0])}>
           +
          </Button>
        </ListItem>
        <ListItem my="5px">Consectetur adipiscing elit</ListItem>
        <ListItem my="5px">Integer molestie lorem at massa</ListItem>
        <ListItem my="5px">Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <hr />
      </CardBody>
      <Flex width="100%" justifyContent="space-between">
        <Text>Total:</Text>
        <Text>16 dollars</Text>
      </Flex>
      <Button sx={buttonStyle}>Order</Button>
      </Flex>
    </Card>
  )
}

const cartStyle: SystemStyleObject = {
  bg: "#FFF9F4",
  border: "1px solid rgb(0,0,0, 0.2)",
  borderRadius: "10px",
  padding: "20px",
}

const flexStyle: SystemStyleObject = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "20px",
}

const buttonStyle: SystemStyleObject = {
  width: "100%",
  bg: "#2B3C40",
  color: "white",
}