import { ReactNode } from "react";

export interface IStyledProps {
    flex?: number;
}
export interface IProps extends IStyledProps {
    children: ReactNode;
}
