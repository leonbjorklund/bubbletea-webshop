import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  SystemStyleObject,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AdminForm } from "./AdminForm";
import EditProductForm from "./EditProductForm";

export function AdminCard() {
  const location = useLocation();

  const editPage = location.pathname.includes("/edit");

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => setIsFormVisible((prev) => !prev);

  return (
    <Card sx={cartStyle}>
      <Flex sx={flexStyle}>
        <CardHeader p="5px">
          {editPage ? (
            <Heading size="md">Edit Product</Heading>
          ) : (
            <Heading size="md">Add Product</Heading>
          )}
        </CardHeader>
        <CardBody width="100%" p="0">
          <CardBody width="100%" p="0">
            {isFormVisible && (editPage ? <EditProductForm /> : <AdminForm />)}
          </CardBody>
        </CardBody>
        <CardFooter sx={cardFooterStyle}>
          <IconButton
            aria-label="Toggle form visibility"
            icon={<MdAdd />}
            onClick={toggleFormVisibility}
            size="lg"
            sx={iconButtonStyle}
          />
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

const cardFooterStyle: SystemStyleObject = {
  width: "100%",
  display: "block",
  p: "0",
};

const iconButtonStyle: SystemStyleObject = {
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
};
