import styled from "styled-components";
import { IStyledProps } from "./types";

export const TextStyled = styled.div`
    padding: 5px;
    width: max-content;
    :hover {
        background-color: ${(props: IStyledProps) => (!props.link ? "rgba(0, 0, 0, 0.06)" : "inherit")};
    }
`;
