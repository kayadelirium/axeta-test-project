import styled from "styled-components";
import { IStyledProps } from "./types";

export const ImageStyled = styled.div`
    margin-right: 8px;
    display: flex;
    :hover {
        color: ${(props: IStyledProps) => (!!props.hover ? "#EB5757" : "inherit")};
    }
`;
