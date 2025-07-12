import type { ButtonHTMLAttributes, FC, ReactElement } from "react";
import cn from "classnames";
import style from "./style.module.scss"

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type = "button",
    children,
    className,
    ...rest
}): ReactElement => {

    return (
        <button type={type} className={cn(style.button)} {...rest}>
            { children }
        </button>
    );

}

export default Button;