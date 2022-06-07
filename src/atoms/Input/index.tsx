import React from "react";
import { ImgStyled, InputContainerStyled, InputStyled } from "./index.styled";
import { IProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
    const path = !props.error ? "images/ok.svg" : "images/close.svg";
    return (
        <InputContainerStyled>
            <InputStyled ref={ref} {...props} />
            <ImgStyled src={path} alt={path} {...props} />
        </InputContainerStyled>
    );
});

export default Input;
