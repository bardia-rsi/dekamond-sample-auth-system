import type { FormHTMLAttributes, ReactNode, ReactElement } from "react";
import type { FormikValues, FormikConfig } from "formik";
import { Formik, Form as FormikForm } from "formik";

interface Props {
    form?: FormHTMLAttributes<HTMLFormElement>;
    children: ReactNode;
}

type FormComponent = <Values extends FormikValues>(props: FormikConfig<Values> & Props) => ReactElement;

const Form: FormComponent = ({ form, children, ...props }): ReactElement => {

    return (
        <Formik {...props}>
            <FormikForm {...form} className={form?.className}>
                { children }
            </FormikForm>
        </Formik>
    );

}

export default Form;