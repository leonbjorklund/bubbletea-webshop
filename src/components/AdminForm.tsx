import { Button, FormControl, FormLabel, Input, SystemStyleObject, Text } from "@chakra-ui/react";
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
      console.log("Form submitted with values:", values);
      alert(JSON.stringify(values, null));
      actions.resetForm();
    }
  });

  return (
    <form
    // as="form"
      onSubmit={formik.handleSubmit as React.FormEventHandler<HTMLFormElement>}
      >
      <FormControl>
        <FormLabel>id</FormLabel>
        <Input
        id="id"
        name="id"
        type="text"
        placeholder="id"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id}
        />
      {formik.touched.id && formik.errors.id ? <Text sx={requiredText}>{formik.errors.id}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Image URL</FormLabel>
        <Input
        id="image"
        name="image"
        type="text"
        placeholder="Image URL"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
        />
       {formik.touched.image && formik.errors.image ? <Text sx={requiredText}>{formik.errors.image}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Image Alt</FormLabel>
        <Input
        id="imageAlt"
        name="imageAlt"
        type="text"
        placeholder="Image Alt"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.imageAlt}
        />
        {formik.touched.imageAlt && formik.errors.imageAlt ? <Text sx={requiredText}>{formik.errors.imageAlt}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
        id="title"
        name="title"
        type="text"
        placeholder="Image Alt"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? <Text sx={requiredText}>{formik.errors.title}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Describtion</FormLabel>
        <Input
        id="description"
        name="description"
        type="text"
        placeholder="Image Alt"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? <Text sx={requiredText}>{formik.errors.description}</Text> : null}
      </FormControl>


      <Button type="submit">Submit</Button>
    </form>
  )
}

const requiredText: SystemStyleObject = {
  color: "red",
}
