import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, SystemStyleObject } from "@chakra-ui/react";
import { AdminForm } from "./AdminForm";

export function AdminCard() {
    return(
        <Card sx={cartStyle}>
        <Flex sx={flexStyle}>
          <CardHeader p="5px">
            <Heading size="md">Add Product</Heading>
          </CardHeader>
          <CardBody width="100%" p="0">
            <AdminForm></AdminForm>
          </CardBody>
          <CardFooter sx={cardFooterStyle}>
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