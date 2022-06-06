import { ReactNode } from "react";

export interface IStyledProps {
    bold?: boolean;
    big?: boolean;
}
export interface IProps extends IStyledProps {
    children: ReactNode;
}
