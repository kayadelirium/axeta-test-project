import styled from "styled-components";
import { IStyledProps } from "./types";

export const InputContainerStyled = styled.div`
    display: flex;
    align-content: center;
`;
export const InputStyled = styled.input`
    font-family: "Roboto";
    font-style: normal;
    font-size: ${(props: IStyledProps) => (!!props.big ? "40px" : !!props.small ? "14px" : "16px")};
    line-height: ${(props: IStyledProps) => (!!props.big ? "48px" : !!props.small ? "16px" : "24px")};
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    width: ${(props: IStyledProps) => (!!props.big ? "300px" : "150px")};
    display: block;
    box-sizing: border-box;
    outline: none;
    padding: ${(props: IStyledProps) => (!!props.small ? "2px 4px 2px 4px" : "5px")};
    cursor: pointer;
    :hover,
    :focus {
        background-color: rgba(0, 0, 0, 0.06);
        border-bottom: 1px solid black;
    }
    border-color: ${(props: IStyledProps) => (props.error ? "#EB5757" : " #000000")};
`;

export const ImgStyled = styled.img`
    height: ${(props: IStyledProps) => (!!props.big ? "32px" : "16px")};
    width: ${(props: IStyledProps) => (!!props.big ? "32px" : "16px")};
    flex: auto;
    align-self: center;
`;
