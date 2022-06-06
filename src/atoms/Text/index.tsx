import React from "react";
import { TextStyled } from "./index.styled";
import { IProps } from "./types";

const Text: React.FC<IProps> = (props: IProps) => {
    return <TextStyled {...props}> {props.children} </TextStyled>;
};

export default Text;
