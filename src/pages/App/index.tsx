import React, { useState } from "react";
import Header from "../../templates/Header";
import Main from "../../templates/Main";
import { AppStyled } from "./index.styled";
import { IUser } from "../../types";

const defaultUser: IUser = {
    name: "John Smith",
    portfolio: [
        { technology: "Bootstrap 4 Material Design (Sample Link)", link: "#" },
        { technology: "Modern JavaScript stack", link: "#" },
        { technology: "Datepicker for twitter bootstrap", link: "#" },
        { technology: "Fast and reliable Bootstrap widgets in Angular ", link: "#" },
    ],
    experience: [
        { technology: "PHP", years: 6 },
        { technology: "JavaScript", years: 4.5 },
        { technology: "Ruby", years: 2 },
    ],
    place: "Portland, Oregon, USA",
    sample: `<div class='golden-grid'>
    <div style='grid-area: 
        11 / 1 / span 10 / span 12;'> 
    </div>
</div>`,
    availability: "Full-time",
    environment: "GitHub, Mac OSX",
    amazing: "The only true wisdom is in knowing you know nothing...",
    lookingfor: "There is only one good, knowledge, and one evil, ignorance.",
    language: "English",
};

const App: React.FC = () => {
    const [user, setUser] = useState<IUser>(defaultUser);
    return (
        <AppStyled>
            <Header user={user} setUser={setUser} />
            <Main user={user} setUser={setUser} />
        </AppStyled>
    );
};

export default App;
