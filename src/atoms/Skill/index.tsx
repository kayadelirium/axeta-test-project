import React from "react";
import { SkillStyled } from "./index.styled";
import { IProps } from "./types";

const Skill: React.FC<IProps> = (props: IProps) => {
    return <SkillStyled> {props.children} </SkillStyled>;
};

export default Skill;
