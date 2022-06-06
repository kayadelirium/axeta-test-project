import React from "react";
import { ImageStyled } from "./index.styled";
import { IProps } from "./types";

const Image: React.FC<IProps> = (props: IProps) => {
    return (
        <ImageStyled {...props}>
            <img src={props.path} alt={props.path} color="red" />
        </ImageStyled>
    );
};

export default Image;
