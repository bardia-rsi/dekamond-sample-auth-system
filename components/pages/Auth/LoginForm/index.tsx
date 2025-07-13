"use client";

import type { FC, ReactElement } from "react";
import type { FormikValues } from "formik";
import type { InputChangeHandler } from "@/components/ui/Input";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/hooks/api/useGetUserData";
import { useUserContext } from "@/hooks/context/useUserContext";
import { loginSchema } from "@/schemas/login";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Button from "@/components/ui/Button";
import style from "./style.module.scss";

interface FormValues extends FormikValues {
    phoneNumber: string;
}

const initialValues: FormValues = {
    phoneNumber: ""
}

const AuthPageLoginForm: FC = (): ReactElement => {

    const router = useRouter();
    const { trigger: getUserData, isMutating } = useGetUserData();
    const { setUser } = useUserContext();

    const submitHandler = useCallback(
        async (): Promise<void> => {
            setUser(await getUserData());
            router.push("/dashboard");
        },
        [setUser, getUserData, router]
    );

    const inputChangeHandler: InputChangeHandler = useCallback<InputChangeHandler>(
        (e, previousValue): void => {
            if (e.target.value !== "" && !/^\d+$/.test(e.target.value)) {
                e.target.value = previousValue;
            }
        },
        []
    )

    return (
        <Form
            onSubmit={submitHandler}
            validationSchema={loginSchema}
            form={{ className: style.auth_form }}
            initialValues={initialValues}
        >
            <h3 className={style.auth_form__title}>
                Welcome Back
            </h3>
            <div className={style.auth_form__group}>
                <label htmlFor="phoneNumber" className={style.auth_form__label}>Phone Number</label>
                <Input
                    name="phoneNumber"
                    type="text"
                    onChange={inputChangeHandler}
                    className={style.auth_form__input}
                    inputMode="numeric"
                    autoComplete="off"
                />
                <ErrorMessage fieldName="phoneNumber" />
                <Button type="submit">
                    { isMutating ? "Loading..." : "Login" }
                </Button>
            </div>
        </Form>
    );

}

export default AuthPageLoginForm;