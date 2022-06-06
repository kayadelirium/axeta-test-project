import React from "react";
import { RowStyled } from "./index.styled";
import { IProps } from "./types";

const Row: React.FC<IProps> = (props: IProps) => {
    return <RowStyled> {props.children} </RowStyled>;
};

export default Row;
