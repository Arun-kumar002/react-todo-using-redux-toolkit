import * as yup from "yup";

let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter valid email").required("required"),
  age: yup.number().positive().integer().required("required"),
  password: yup
    .string()
    .min(5)
    .matches(regex, {
      message: "your password should have 5 char 1 up , 1 lower,1 numeric",
    })
    .required("required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "password mismatch")
    
});
