import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";

import { Box, Flex, HStack, Stack, SystemStyleObject } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

export function CheckoutForm() {
  const navigate = useNavigate();
  const { cartList, clearCart } = useCart();

  return (
    <Formik 
      initialValues={{
        name: "",
        email: "",
        phone: "",
        street: "",
        zipCode: "",
        city: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string() 
          .required("First name required")
          .min(2, "First name is too short"),
        email: Yup.string().email("invalid email").required("email required"),
        phone: Yup.string()
          .required("Phone required")
          .min(2, "Phone is too short"),
        street: Yup.string()
          .required("Street required")
          .min(2, "Street is too short"),
        zipCode: Yup.string()
          .required("Zip code required")
          .min(2, "Zip code is too short"),
        city: Yup.string()
          .required("City required")
          .min(2, "City is too short"),
      })}
      onSubmit={(values, actions) => {
        localStorage.setItem("contactDetails", JSON.stringify(values));
        actions.resetForm();
        navigate("/confirmation");
      }}
    >
      {(formik) => (
        <form data-cy="customer-form"
          onSubmit={
            formik.handleSubmit as React.FormEventHandler<HTMLFormElement>
          }
        >
          <Flex  sx={formStyle}>
            <Stack spacing={8} paddingTop="2rem">
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Contact Details
                </Heading>
              </Stack>
              <Box sx={formBoxStyle}>
                <Stack spacing={4}>
                  <HStack>
                    <TextField data-cy="customer-name" name="name" label="Name" />
                  </HStack>
                  <TextField data-cy="customer-email" name="email" label="Email" />
                  <TextField data-cy="customer-phone" name="phone" label="Phone nr." />
                  <TextField data-cy="customer-address" name="street" label="Street" />
                  <TextField data-cy="customer-zipcode" name="zipCode" label="Zip Code" />
                  <TextField data-cy="customer-city" name="city" label="City" />
                  <Stack spacing={10} pt={2}>
                    <Button
                    
                      loadingText="Submitting"
                      sx={submitButtonStyle}
                      type="submit"
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => clearCart(cartList)}
                    >
                      Place Order
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      )}
    </Formik>
  );
}

const formStyle = {
  mx: "auto",
  as: "form",
  bg: "white",
  marginTop: "1rem",
  border: "2px solid rgb(0,0,0, 0.2)",
  borderRadius: "0.625rem",
  flexDirection: "column",
  align: "center",
  justify: "center",
};

const formBoxStyle = {
  rounded: "lg",
  boxShadow: "lg",
  p: "0.5rem",
  paddingTop: "0",
};

const submitButtonStyle = {
  width: "14rem",
  height: "4rem",
  mx: "auto",
  bg: "lightGreenButton",
  color: "black",
  border: "none",
};

// Ska vara ett formulär där användaren fyller i
// namn,
// mail,
// telefonnummer och
// adress.
// Fälten i formuläret ska gå att automatisk fyllas i.
// Samtliga fält ska valideras så att endast rätt information kan matas in.

// När alla delar har fyllts i på kassasidan så ska användaren kunna slutföra köpet
//och då få en bekräftelse på köpet tillsammans med ett unikt ordernummer.

// Tänk på att det inte ska gå att placera ordern två gånger,
// även om man navigerar tillbaka på sidan!
// orderinformationen som har matats in skall presenteras i beskräftelsen
// som ett bevis på att ni har hanterat datan i alla formulären korrekt.
