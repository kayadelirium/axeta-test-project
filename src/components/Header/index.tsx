import React from "react";
import Col from "../../layout/Col";
import Row from "../../layout/Row";
import Wrapper from "../../layout/Wrapper";
import { HeaderStyled } from "./index.styled";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import ImageText from "../../molecules/ImageText";
import ImageLink from "../../molecules/ImageLink";
const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Wrapper>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Image path="images/userpic.svg" />
                            </Col>
                            <Col flex={2}>
                                <Text big>william shakespeare</Text>
                                <Text>stratford-upon-awon </Text>
                                <ImageText path="images/flag.svg"> britain </ImageText>
                                <Text>lalala lalala lalala</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <ImageLink path="images/printer.svg" href="#">
                            print
                        </ImageLink>
                    </Col>
                </Row>
            </Wrapper>
        </HeaderStyled>
    );
};

export default Header;
