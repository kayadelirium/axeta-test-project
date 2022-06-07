import { IProps } from "./types";
import Input from "../../atoms/Input";
import { useEffect, useRef, useState } from "react";
import { ButtonStyled } from "./index.styled";

const ButtonText: React.FC<IProps> = (props: IProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleBlur = (): void => {
        setIsClicked(false);
        if (ref.current!.value) props.save(ref.current!.value);
    };

    useEffect((): void => {
        if (isClicked) {
            ref.current!.value = props.text;
            ref.current!.focus();
            ref.current!.onblur = handleBlur;
            ref.current!.removeEventListener("onblur", handleBlur);
        }
    }, [isClicked]);

    return (
        <>
            {isClicked ? (
                <Input type={props.type ? props.type : "string"} small {...props} ref={ref} />
            ) : (
                <ButtonStyled onClick={() => setIsClicked(true)}>+</ButtonStyled>
            )}
        </>
    );
};

export default ButtonText;
