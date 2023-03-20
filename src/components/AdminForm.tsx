import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function AdminForm() {
  const formik = useFormik({
    initialValues: {
      id: "",
      image: "",
      imageAlt: "",
      title: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      id: Yup.string()
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
          id="id"
          name="id"
          type="text"
          placeholder="Full name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.id}
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