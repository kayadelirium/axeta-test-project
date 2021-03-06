import styled from "styled-components";
import { IStyledProps } from "./types";

export const ColStyled = styled.section`
    flex: ${(props: IStyledProps) => (props.flex ? props.flex : 1)};
    min-width: 200px;
    padding: 12px;
`;
