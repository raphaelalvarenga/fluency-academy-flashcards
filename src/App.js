import React from "react";
import Flashcards from "./views/Flashcards";
import { Container, GlobalStyle } from "./styled-components";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Flashcards />
            </Container>
        </>
    )
}

export default App;