import {
  FormControl,
  FormErrorMessage,
  FormLabel
} from "@chakra-ui/form-control";
import { Input, InputProps } from "@chakra-ui/input";
import { Field, FieldHookConfig, useField } from "formik";

// Define the new type that includes the 'label' property
type TextFieldProps = InputProps & FieldHookConfig<any> & { label?: string };

export const TextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={!!(meta.error && meta.touched)}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
