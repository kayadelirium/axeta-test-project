import React from "react";
import SectionHeader from "../../atoms/SectionHeader";
import Text from "../../atoms/Text";
import Col from "../../layout/Col";
import Row from "../../layout/Row";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Wrapper from "../../layout/Wrapper";
import QuotedText from "../../organisms/QuotedText";
import Experience from "../../organisms/Experience";
import Portfolio from "../../organisms/Portfolio";
import { MainStyled } from "./index.styled";
import { IProps } from "./types";

const Main: React.FC<IProps> = (props: IProps) => {
    const { user, setUser } = props;
    return (
        <MainStyled>
            <Wrapper>
                <Row>
                    <Col>
                        <SectionHeader>Portfolio</SectionHeader>
                        <Portfolio portfolio={user.portfolio} />
                    </Col>
                    <Col>
                        <SectionHeader>Experience</SectionHeader>
                        <Experience user={user} setUser={setUser} />
                    </Col>
                    <Col>
                        <SectionHeader>Sample Code</SectionHeader>
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomOneLight}
                            showLineNumbers
                            customStyle={{ fontSize: "12px" }}
                        >
                            {user.sample}
                        </SyntaxHighlighter>
                    </Col>
                    <Col>
                        <SectionHeader>Availability</SectionHeader>
                        <Text>{user.availability} </Text>

                        <SectionHeader>Environment</SectionHeader>
                        <Text>{user.environment}</Text>
                    </Col>
                    <Col>
                        <SectionHeader>The Most Amazing</SectionHeader>
                        <QuotedText> {user.amazing} </QuotedText>
                    </Col>
                    <Col>
                        <SectionHeader>In clients I look for</SectionHeader>
                        <QuotedText> {user.lookingfor}</QuotedText>
                    </Col>
                    <Col flex={2}>
                        <div id="map" style={{ width: "100%", height: "100%" }} />
                    </Col>
                </Row>
            </Wrapper>
        </MainStyled>
    );
};

export default Main;
