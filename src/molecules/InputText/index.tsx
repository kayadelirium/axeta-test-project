import { IProps } from "./types";
import Input from "../../atoms/Input";
import Text from "../../atoms/Text";
import { useEffect, useRef, useState } from "react";
import { TextStyled } from "./index.styled";

const InputText: React.FC<IProps> = (props: IProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isInput, setIsInput] = useState<boolean>(false);

    const handleBlur = (): void => {
        setIsInput(false);
        props.save(ref.current!.value);
    };

    useEffect((): void => {
        if (isInput) {
            ref.current!.value = props.text;
            ref.current!.focus();
            ref.current!.onblur = handleBlur;
            ref.current!.removeEventListener("onblur", handleBlur);
        }
    }, [isInput]);

    return (
        <>
            {isInput ? (
                <Input type={props.type ? props.type : "string"} {...props} ref={ref} />
            ) : (
                <TextStyled big={props.big} link={props.link} onClick={() => setIsInput(true)}>
                    <Text {...props}>
                        {props.text} {props.type ? (props.text !== "1" ? "years" : "year") : ""}
                    </Text>
                </TextStyled>
            )}
        </>
    );
};

export default InputText;
