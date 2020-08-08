import React from "react";
import Flashcards from "./views/Flashcards";
import { Container, GlobalStyle } from "./styled-components";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Container>
                <Routes />
            </Container>
        </BrowserRouter>
    )
}

export default App;