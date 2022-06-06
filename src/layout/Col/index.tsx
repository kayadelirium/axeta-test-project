import React from "react";
import { ColStyled } from "./index.styled";
import { IProps } from "./types";

const Col: React.FC<IProps> = (props: IProps) => {
    return <ColStyled flex={props.flex}> {props.children} </ColStyled>;
};

export default Col;
