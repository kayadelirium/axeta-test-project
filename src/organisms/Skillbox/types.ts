import React from "react";
import { IUser } from "../../types";

export interface IProps {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
