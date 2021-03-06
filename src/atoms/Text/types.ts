import { ReactNode } from "react";

export interface IStyledProps {
    bold?: boolean;
    big?: boolean;
    link?: boolean;
}
export interface IProps extends IStyledProps {
    children: ReactNode;
}
