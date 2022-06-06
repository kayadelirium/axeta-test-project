import React from "react";
import { SectionHeaderStyled } from "./index.styled";
import { IProps } from "./types";

const SectionHeader: React.FC<IProps> = (props: IProps) => {
    return <SectionHeaderStyled> {props.children} </SectionHeaderStyled>;
};

export default SectionHeader;
