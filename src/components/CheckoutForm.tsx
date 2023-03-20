import { Button, FormControl, FormLabel, Input, SystemStyleObject, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function CheckoutForm() {

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

      email: Yup.string()
      .email("Invalid email adress!")
      .required("Required"),

      phoneNumber: Yup.string()
      .max(20, "Must be 15 characters or less")
      .required("Required"),

      address: Yup.string()
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 4));
      actions.resetForm();
      // console.log("Form submitted with values:", values);
    },
  });

  return (
    <form
    // as="form"
      onSubmit={formik.handleSubmit as React.FormEventHandler<HTMLFormElement>}
      >
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Full name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? <Text sx={requiredText}>{formik.errors.fullName}</Text> : null}
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <Text sx={requiredText}>{formik.errors.email}</Text> : null}
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <Text sx={requiredText}>{formik.errors.phoneNumber}</Text> : null}
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? <Text sx={requiredText}>{formik.errors.address}</Text> : null}
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  )
}

const requiredText: SystemStyleObject = {
  color: "red",
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