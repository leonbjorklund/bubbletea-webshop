import { Button, Card, CardBody, CardHeader, Flex, Heading, ListItem, SystemStyleObject, Text, UnorderedList } from "@chakra-ui/react";

export function CartCard() {
  return (
    <Card maxW="40%" sx={cartStyle}>
      <Flex sx={flexStyle}>
      <CardHeader>
        <Heading size='md'>Cart</Heading>
      </CardHeader>
      <CardBody>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <Text>Total: 123DOLLARS</Text>
      </CardBody>
      <Button>Order</Button>
      </Flex>
    </Card>
  )
}

const cartStyle: SystemStyleObject = {
  bg: "#FFF9F4",
  border: "2px solid black",
  borderRadius: "10px",
}

const flexStyle: SystemStyleObject = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}