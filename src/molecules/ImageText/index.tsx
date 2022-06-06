import { ImageTextStyled } from "./index.styled";
import { IProps } from "./types";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

const ImageText: React.FC<IProps> = (props: IProps) => {
    return (
        <ImageTextStyled>
            <Image path={props.path} />
            <Text {...props}> {props.children} </Text>
        </ImageTextStyled>
    );
};

export default ImageText;
