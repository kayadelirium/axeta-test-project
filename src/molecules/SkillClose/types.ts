import { ReactNode } from "react";

export interface IProps {
    children: ReactNode;
    delete: () => void;
}
