import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";

import { Flex, FormLabel, SystemStyleObject } from "@chakra-ui/react";

export function CheckoutForm() {

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "",   email: "", phone: "", street: "", zipCode: "", city: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First name required")
          .min(2, "First name is too short"),
        lastName: Yup.string()
          .required("Last name required")
          .min(2, "Last name is too short"),
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
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <Flex
          sx={FormStyle}
          as="form"
          bg="white"
          flexDirection="column"
          onSubmit={formik.handleSubmit as any}
        >
          <Heading>Enter details</Heading>

          <FormLabel textAlign="left">First name</FormLabel>
          <TextField name="firstName"/>
          <FormLabel>Last name</FormLabel>
          <TextField name="lastName"/>
          <FormLabel>Email</FormLabel>
          <TextField name="email"/>
          <FormLabel>Phone</FormLabel>
          <TextField name="phone"/>
          <FormLabel>Street</FormLabel>
          <TextField name="street"/>
          <FormLabel>Zip code</FormLabel>
          <TextField name="zipCode"/>
          <FormLabel>City</FormLabel>
          <TextField name="city"/>

          <Button type="submit" variant="outline" colorScheme="teal">
            Submit
          </Button>
        </Flex>
      )}
    </Formik>
  );
}

const FormStyle: SystemStyleObject = {
  px: "1rem"
}


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