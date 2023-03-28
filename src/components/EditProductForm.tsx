import { Button, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../data";
import { useProduct } from "../ProductContext";
import { requiredText, schema } from "./AdminForm";


export default function EditForm() {

  const navigate = useNavigate()
  const { productList, editProduct } = useProduct();

  const { id } = useParams<{ id: string }>();
  const productToEdit = productList.find((product) => product.id === id);

  const formik = useFormik<Product>({
    initialValues: productToEdit
      ? {
          ...productToEdit,
        }
      : {
          id: "",
          image: "",
          imageAlt: "",
          title: "",
          description: "",
          price: "" as any,
          allergens: "",
          ingredients: "",
          bgColor: "",
          category: "",
        },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      console.log("Form submitted with values:", values);
      editProduct(values);
      actions.resetForm();
      console.log(productList);
      navigate('/admin');
    },
  });

  useEffect(() => {
    if (productToEdit) {
      formik.setValues({
        ...productToEdit,
      });
    } else {
      formik.setValues({
        id: "",
        image: "",
        imageAlt: "",
        title: "",
        description: "",
        price: "" as any,
        allergens: "",
        ingredients: "",
        bgColor: "",
        category: "",
      });
    }
  }, [id]);


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
        <Select
          id="bgColor"
          name="bgColor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bgColor}
          placeholder="Select a color"
        >
          <option value="yellowCardCircle">Yellow</option>
          <option value="fruitTeaCircle">Pink</option>
          <option value="bigMatchaCard">Green</option>
          <option value="#8fc2e9">Blue</option>
          <option value="#bf96da">Purple</option>
        </Select>
        {formik.touched.bgColor && formik.errors.bgColor ? (
          <Text sx={requiredText}>{formik.errors.bgColor}</Text>
        ) : null}
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
  );
}
