import React from "react";
import Col from "../../layout/Col";
import Row from "../../layout/Row";
import Wrapper from "../../layout/Wrapper";
import { HeaderStyled } from "./index.styled";
import Image from "../../atoms/Image";
import ImageText from "../../molecules/ImageText";
import ImageLink from "../../molecules/ImageLink";
import { IProps } from "./types";
import InputText from "../../molecules/InputText";
import Skillbox from "../../organisms/Skillbox";

const Header: React.FC<IProps> = (props: IProps) => {
    const { user, setUser } = props;
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
                                <InputText big text={user.name} save={(value) => setUser({ ...user, name: value })} />
                                <InputText
                                    text={user.place}
                                    save={(value) => {
                                        window.searchCity(value);
                                        setUser({ ...user, place: value });
                                    }}
                                />
                                <ImageText path="images/flag.svg"> {user.language} </ImageText>
                                <Skillbox user={user} setUser={setUser} />
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
