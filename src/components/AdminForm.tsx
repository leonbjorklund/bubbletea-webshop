import { Button, FormControl, FormLabel, Input, Select, SystemStyleObject, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Product } from "../../data";
import { useProduct } from "../ProductContext";

type ProductValues = Record<keyof Product, Yup.AnySchema>

const schema = Yup.object<ProductValues>().shape({
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
    
  allergens: Yup.string()
    .required("Required"),

  ingredients: Yup.string()
    .required("Required"),

  bgColor: Yup.string()
    .required("Required"),

    category: Yup.string()
    .oneOf(["milk", "fruit"], "Category must be either 'milk' or 'fruit'")
    .required("Required")
});

interface Props {
  product?: Product
}

function generateUniqueId(): string {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${randomValue}`;
}

export function AdminForm({ product }: Props) {

  const { productList, addProduct } = useProduct();

  const formik = useFormik<Product>({
    initialValues: {
      id: "",
      image: "",
      imageAlt: "",
      title: "",
      description:"",
      price: "" as any,
      allergens: "",
      ingredients: "",
      bgColor: "",
      category:""
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      const newProduct = { ...values, id: generateUniqueId() };
      addProduct(newProduct);
      console.log("Form submitted with values:", values);
      alert(JSON.stringify(values, null));
      actions.resetForm();
      console.log(productList)
    }
  });

  return (
    <form
    // as="form"
      onSubmit={formik.handleSubmit as React.FormEventHandler<HTMLFormElement>}
      >
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
        <FormLabel>Description</FormLabel>
        <Input
        id="description"
        name="description"
        type="text"
        placeholder="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? <Text sx={requiredText}>{formik.errors.description}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input
        id="price"
        name="price"
        type="text"
        placeholder="price"
        onChange={(e) => formik.setFieldValue('price', Number(e.target.value))}
        onBlur={formik.handleBlur}
         value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? <Text sx={requiredText}>{formik.errors.price}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Allergens</FormLabel>
        <Input
        id="allergens"
        name="allergens"
        type="text"
        placeholder="allergens"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.allergens}
        />
        {formik.touched.allergens && formik.errors.allergens ? <Text sx={requiredText}>{formik.errors.allergens}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Ingredients</FormLabel>
        <Input
        id="ingredients"
        name="ingredients"
        type="text"
        placeholder="ingredients"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.ingredients}
        />
        {formik.touched.ingredients && formik.errors.ingredients ? <Text sx={requiredText}>{formik.errors.ingredients}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>BackgroundColor</FormLabel>
        <Input
        id="bgColor"
        name="bgColor"
        type="text"
        placeholder="backgroundcolor"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.bgColor}
        />
        {formik.touched.bgColor && formik.errors.bgColor ? <Text sx={requiredText}>{formik.errors.bgColor}</Text> : null}
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          placeholder="Select a category"
        >
          <option value="milk">Milk</option>
          <option value="fruit">Fruit</option>
        </Select>
        {formik.touched.category && formik.errors.category ? (
          <Text sx={requiredText}>{formik.errors.category}</Text>
        ) : null}
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  )
}

const requiredText: SystemStyleObject = {
  color: "red",
}
