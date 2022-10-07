import * as yup from "yup";

export const ContactSchema = yup
  .object({
    fullName: yup.string().label("Full name").required(),
    phone: yup.string().label("Mobile Number").required(),
    email: yup.string().label("Email").required().email(),
    subject: yup.string().label("Subject").required(),
    message: yup.string().label("Message").required(),
  })
  .required();
