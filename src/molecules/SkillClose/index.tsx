import { IProps } from "./types";
import { useState } from "react";
import { ImgStyled, SkillCloseStyled } from "./index.styled";
import Skill from "../../atoms/Skill";

const SkillClose: React.FC<IProps> = (props: IProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <SkillCloseStyled onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Skill> {props.children} </Skill>
            {isHover ? <ImgStyled src="images/close.svg" alt="images/close.svg" onClick={props.delete} /> : <></>}
        </SkillCloseStyled>
    );
};

export default SkillClose;
