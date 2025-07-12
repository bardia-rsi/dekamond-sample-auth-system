import type { FC, ReactElement } from "react";
import { useField } from "formik";
import style from "./style.module.scss"

interface Props {
    fieldName: string;
}

const ErrorMessage: FC<Props> = ({ fieldName }): ReactElement | null => {

    const meta = useField(fieldName)[1];
    const isError: boolean = Boolean(meta.touched && meta.error);

    return isError
        ? (
            <span className={style.error_message}>
                { meta.error }
            </span>
        )
        : null;

}

export default ErrorMessage;
