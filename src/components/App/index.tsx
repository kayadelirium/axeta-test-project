import React from "react";
import Header from "../Header";
import Main from "../Main";
import { AppStyled } from "./index.styled";

const App: React.FC = () => {
    return (
        <AppStyled>
            <Header />
            <Main />
        </AppStyled>
    );
};

export default App;
