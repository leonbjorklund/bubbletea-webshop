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
      description:"",
      price:"",
      bgColor: "",
      category:""
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    
      image: Yup.string()
        .url("Invalid image URL!")
        .required("Required"),
    
      imageAlt: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    
      title: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    
      price: Yup.number()
        .typeError("Must be a number")
        .positive("Price must be positive")
        .required("Required"),
    
      bgColor: Yup.string()
        .required("Required"),
    
        category: Yup.string()
        .oneOf(["milk", "fruit"], "Category must be either 'milk' or 'fruit'")
        .required("Required")
    })
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 4));
      actions.resetForm();
      console.log("Form submitted with values:", values);
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