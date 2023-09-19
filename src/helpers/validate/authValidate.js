import * as yup from "yup";

const validationAuthSignUp = yup.object().shape({
  email: yup.string().required("Почта обязателное поле!"),
  name: yup.string().required("Имя обязателное поле!"),
  password: yup
    .string()
    .min(6, "Пароль должен быть больше 6 симбоволов!")
    .max(100)
    .required("Пароль обязательное поле!"),

  confirmPassword: yup
    .string()
    .required("Подвердите пароль обязательное поле!"),
});
export { validationAuthSignUp };
