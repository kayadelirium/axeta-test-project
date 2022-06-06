import { CloseQuoteStyled, OpenQuoteStyled, QuotedTextStyled, TextStyled } from "./index.styled";
import { IProps } from "./types";

const QuotedText: React.FC<IProps> = (props: IProps) => {
    return (
        <QuotedTextStyled>
            <OpenQuoteStyled src="images/openquote.svg" />
            <TextStyled> {props.children} </TextStyled>
            <CloseQuoteStyled src="images/closequote.svg" />
        </QuotedTextStyled>
    );
};

export default QuotedText;
