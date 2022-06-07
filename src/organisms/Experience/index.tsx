import { ExperienceItemStyled, ExperienceStyled } from "./index.styled";
import { IProps } from "./types";
import Text from "../../atoms/Text";
import InputText from "../../molecules/InputText";

const Experience: React.FC<IProps> = (props: IProps) => {
    let user = { ...props.user };
    return (
        <ExperienceStyled>
            {props.user.experience.map((item) => (
                <ExperienceItemStyled key={item.technology + item.years}>
                    <Text> - </Text>
                    <Text bold> {item.technology} </Text>
                    <InputText
                        type="number"
                        text={String(item.years)}
                        save={(value) => {
                            const newExp = user.experience.filter((skill) => item.technology !== skill.technology);
                            user.experience = [...newExp, { technology: item.technology, years: Number(value) }].sort(
                                (a, b) => b.years - a.years
                            );
                            console.log(user);
                            props.setUser(user);
                        }}
                        link
                    />
                </ExperienceItemStyled>
            ))}
        </ExperienceStyled>
    );
};

export default Experience;
