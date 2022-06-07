import { PortfolioLinkStyled } from "./index.styled";
import { IProps } from "./types";
import Text from "../../atoms/Text";
import Link from "../../atoms/Link";

const PortfolioLink: React.FC<IProps> = (props: IProps) => {
    return (
        <PortfolioLinkStyled>
            <Text> - </Text>
            <Link href={props.link}> {props.technology} </Link>
        </PortfolioLinkStyled>
    );
};

export default PortfolioLink;
