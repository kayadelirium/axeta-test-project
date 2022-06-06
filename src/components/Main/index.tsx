import React from "react";
import SectionHeader from "../../atoms/SectionHeader";
import Text from "../../atoms/Text";
import Col from "../../layout/Col";
import Row from "../../layout/Row";
import Wrapper from "../../layout/Wrapper";
import QuotedText from "../../molecules/QuotedText";
import { MainStyled } from "./index.styled";

const Main: React.FC = () => {
    return (
        <MainStyled>
            <Wrapper>
                <Row>
                    <Col>
                        <div>
                            <SectionHeader>Col1</SectionHeader>
                            <Text>my mistress eyes are nothing like the sun</Text>
                            <Text>coral is far more red than her lips red</Text>
                            <Text>if snow be white, why then her breasts are dun</Text>
                            <Text>if hairs be wires, black wires grow on her head</Text>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SectionHeader>Col2</SectionHeader>
                            <Text>my mistress eyes are nothing like the sun</Text>
                            <Text>coral is far more red than her lips red</Text>
                            <Text>if snow be white, why then her breasts are dun</Text>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SectionHeader>Col3</SectionHeader>
                            <Text>
                                my mistress eyes are nothing like the sun; <br />
                                coral is far more red than her lips red; <br />
                                if snow be white, why then her breasts are dun; <br />
                                if hairs be wires, black wires grow on her head;
                            </Text>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SectionHeader>Col4</SectionHeader>
                            <Text>my mistress eyes are nothing like the sun</Text>
                        </div>
                        <div>
                            <SectionHeader>Col5</SectionHeader>
                            <Text>coral is far more red than her lips red</Text>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SectionHeader>Col6</SectionHeader>
                            <QuotedText> in a strange room you must empty yourself for sleep </QuotedText>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SectionHeader>Col7</SectionHeader>
                            <QuotedText> shit is a new shit</QuotedText>
                        </div>
                    </Col>
                    <Col flex={2}>
                        <div>
                            <SectionHeader>Col8</SectionHeader>
                            <Text>my mistress eyes are nothing like the sun</Text>
                        </div>
                    </Col>
                </Row>
            </Wrapper>
        </MainStyled>
    );
};

export default Main;
