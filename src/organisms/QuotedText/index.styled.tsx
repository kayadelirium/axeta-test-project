import styled from "styled-components";

export const QuotedTextStyled = styled.div`
    display: flex;
`;

const QuoteStyled = styled.img`
    opacity: 0.2;
`;

export const OpenQuoteStyled = styled(QuoteStyled)`
    align-self: flex-start;
`;

export const CloseQuoteStyled = styled(QuoteStyled)`
    align-self: flex-end;
`;

export const TextStyled = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 16px;
    display: inline;
    margin: 0;
    color: #000000;
`;
