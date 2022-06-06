import { ReactNode } from "react";

export interface IStyledProps {
    hover?: boolean;
}

export interface IProps extends IStyledProps {
    path: string;
}
