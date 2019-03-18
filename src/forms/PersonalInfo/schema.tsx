import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string()
    .email("Wrong email format")
    .required("Required"),
  city: yup.string().required("Required"),
  address: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Required")
});
