import styled from "styled-components";
import { IStyledProps } from "./types";

export const TextStyled = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: ${(props: IStyledProps) => (!!props.bold ? 700 : 400)};
    font-size: ${(props: IStyledProps) => (!!props.big ? "40px" : "16px")};
    line-height: ${(props: IStyledProps) => (!!props.big ? "48px" : "24px")};
    display: inline;
    margin: 0;
    margin-right: 8px;
    color: ${(props: IStyledProps) => (!!props.link ? "#3483cc" : "#000000")};
    border-bottom: ${(props: IStyledProps) => (!!props.link ? "1px #3483cc dashed" : "none")};
    :hover {
        color: ${(props: IStyledProps) => (!!props.link ? "#EB5757" : " #000000")};
        border-bottom: none;
    }
`;
