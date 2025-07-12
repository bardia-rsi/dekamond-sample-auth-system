"use client";

import type {
    FC,
    ReactElement,
    InputHTMLAttributes,
    ChangeEventHandler,
    ChangeEvent,
    FocusEventHandler,
    FocusEvent
} from "react";
import { useCallback } from "react";
import { useField } from "formik";
import cn from "classnames";
import style from "./style.module.scss";

interface Props extends InputElementProps {
    name: string;
    onChange: CustomChangeHandler;
}

type InputElementProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "name"
    | "defaultValue"
    | "defaultChecked"
    | "onChange"
>;

type CustomChangeHandler = (e: ChangeEvent<HTMLInputElement>, previousValue: string) => void;

const Input: FC<Props> = ({
    name,
    disabled,
    onChange: customOnChange,
    onBlur: customOnBlur,
    className,
    ...rest
}): ReactElement => {

    const [{ onChange, onBlur, ...field }, meta] = useField(name);
    const isError: boolean = Boolean(meta.touched && meta.error);

    const changeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(
        (e: ChangeEvent<HTMLInputElement>): void => {

            if (customOnChange) {
                customOnChange(e, field.value);
            }

            onChange(e);

        },
        [customOnChange, name, onChange]
    );

    const blurHandler = useCallback<FocusEventHandler<HTMLInputElement>>(
        (e: FocusEvent<HTMLInputElement>): void => {

            if (customOnBlur) {
                customOnBlur(e);
            }

            onBlur(e);

        },
        [customOnBlur, onBlur]
    );

    return (
        <input
            onChange={disabled ? undefined : changeHandler}
            onBlur={disabled ? undefined : blurHandler}
            className={cn(style.input, isError && style.input_error)}
            id={name}
            {...rest}
            {...field}
        />
    );

}

export type { CustomChangeHandler as InputChangeHandler };

export default Input;