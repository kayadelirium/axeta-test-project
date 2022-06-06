import styled from "styled-components";
import { IStyledProps } from "./types";

export const TextStyled = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: ${(props: IStyledProps) => (!!props.bold ? 700 : 400)};
    font-size: ${(props: IStyledProps) => (!!props.big ? "40px" : "16px")};
    line-height: ${(props: IStyledProps) => (!!props.big ? "48px" : "20px")};
    display: inline;
    margin: 0;
    color: #000000;
`;
