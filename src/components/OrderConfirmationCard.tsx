import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  SystemStyleObject,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useCart } from "../CartContext";

export function OrderConfirmationCard({ checkOutPage = true }) {
  const { addToCart, removeFromCart, cartList } = useCart();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  const cardBodyFontSize = useBreakpointValue({ base: "1rem", sm: "1.2rem" });
  const cardFooterFontSize = useBreakpointValue({ base: "1rem", sm: "1.2rem" });

  return (
    <Card sx={cartStyle}>
      <Flex sx={flexStyle}>
        <CardHeader p="5px">
          <Heading size="lg">
            Thank you for your order! {"#Unique order number"}
          </Heading>
        </CardHeader>
        <CardBody fontSize={cardBodyFontSize} width="100%" p="0">
          <UnorderedList listStyleType="none" marginInlineStart="0">
            {cartList.map((cartItem) => (
              <ListItem key={cartItem.id}>
                <Flex sx={cartItemStyle}>
                  <Text>{cartItem.quantity}</Text>
                  {checkOutPage && (
                    <Image
                      sx={thumbNailStyle}
                      src={cartItem.image}
                      alt={cartItem.imageAlt}
                    />
                  )}
                  <Text paddingTop="10px" flex={1} textAlign="left">
                    {cartItem.title}
                  </Text>
                  <Text paddingTop="10px">
                    ${cartItem.quantity * cartItem.price}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        <CardFooter fontSize={cardFooterFontSize} sx={cardFooterStyle}>
          {/* <Divider bg="gray" opacity="1" /> */}
          <Center>
            <Text>Your delivery will be delivered as soon as possible!</Text>
          </Center>
          <Flex float="right">
            <Text>Total:</Text>
            <Text>${totalPrice}</Text>
          </Flex>
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

const thumbNailStyle: SystemStyleObject = {
  width: "2rem",
  marginRight: "1rem",
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
  fontSize: "1.2rem",
};

const cardFooterStyle: SystemStyleObject = {
  width: "100%",
  display: "block",
  p: "0",
};

const submitButtonStyle: SystemStyleObject = {
  width: "14rem",
  height: "4rem",
  mx: "auto",
  bg: "lightGreenButton",
  color: "black",
  border: "none",
};
