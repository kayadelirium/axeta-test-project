import PortfolioLink from "../../molecules/PortfolioLink";
import { PortfolioStyled } from "./index.styled";
import { IProps } from "./types";

const Portfolio: React.FC<IProps> = (props: IProps) => {
    return (
        <PortfolioStyled>
            {props.portfolio.map((item) => (
                <PortfolioLink key={item.link + item.technology} {...item}></PortfolioLink>
            ))}
        </PortfolioStyled>
    );
};

export default Portfolio;
