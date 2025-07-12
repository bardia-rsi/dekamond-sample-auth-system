import { object, string } from "yup";

const loginSchema = object({
    phoneNumber: string()
        .length(11)
        .matches(/^\d+$/, { message: "Phone number must be includes numbers only" })
        .matches(/^(09[0-9]{2}[0-9]{7})+$/, { message: "Invalid phone number" })
        .required("Phone number is required")
});

export { loginSchema };