import React from "react";
import { IUser } from "../../types";

export interface IStyledProps {
    big?: boolean;
    link?: boolean;
}
export interface IProps extends IStyledProps {
    text: string;
    type?: string;
    save: (value: string) => void;
}
