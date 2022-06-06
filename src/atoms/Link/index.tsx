import React from "react";
import { LinkStyled } from "./index.styled";
import { IProps } from "./types";

const Link: React.FC<IProps> = (props: IProps) => {
    return (
        <LinkStyled {...props} href={props.href} target="_blank">
            {props.children}
        </LinkStyled>
    );
};

export default Link;
