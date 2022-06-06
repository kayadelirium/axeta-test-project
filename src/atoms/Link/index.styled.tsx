import styled from "styled-components";
import { IStyledProps } from "./types";

export const LinkStyled = styled.a`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: inline;
    margin: 0;
    color: #3483cc;
    text-decoration: ${(props: IStyledProps) => (!!props.dashed ? "dashed" : "none")};

    &:hover {
        color: #eb5757;
    }

    :visited {
        color: #3483cc;
        text-decoration: none;
    }
`;
