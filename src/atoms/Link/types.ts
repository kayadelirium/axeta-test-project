import { ReactNode } from "react";

export interface IStyledProps {
    dashed?: boolean;
}

export interface IProps extends IStyledProps {
    href: string;
    children: ReactNode;
}
