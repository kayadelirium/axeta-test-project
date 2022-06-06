import React from "react";
import { WrapperStyled } from "./index.styled";
import { IProps } from "./types";

const Wrapper: React.FC<IProps> = (props: IProps) => {
    return <WrapperStyled> {props.children} </WrapperStyled>;
};

export default Wrapper;
