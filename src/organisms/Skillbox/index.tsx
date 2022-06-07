import ButtonText from "../../molecules/ButtonText";
import SkillClose from "../../molecules/SkillClose";
import { SkillboxStyled } from "./index.styled";
import { IProps } from "./types";

const Skilbox: React.FC<IProps> = (props: IProps) => {
    const { user, setUser } = props;
    return (
        <SkillboxStyled>
            {user.experience.map((skill) => (
                <SkillClose
                    key={skill.technology + skill.years}
                    delete={() => {
                        props.setUser({
                            ...user,
                            experience: user.experience.filter((item) => item.technology !== skill.technology),
                        });
                    }}
                >
                    {skill.technology}
                </SkillClose>
            ))}
            <ButtonText
                text=""
                save={(value) => setUser({ ...user, experience: [...user.experience, { technology: value, years: 0 }] })}
            />
        </SkillboxStyled>
    );
};

export default Skilbox;
