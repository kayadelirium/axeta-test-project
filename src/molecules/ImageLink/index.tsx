import { ImageLinkStyled } from "./index.styled";
import { IProps } from "./types";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";

const ImageLink: React.FC<IProps> = (props: IProps) => {
    return (
        <ImageLinkStyled>
            <Image path={props.path} hover />
            <Link {...props}> {props.children} </Link>
        </ImageLinkStyled>
    );
};

export default ImageLink;
