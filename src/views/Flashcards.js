import React from "react";
import { Container, Content, Header, HeaderItems, HeaderProgress, Button } from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Flashcards = () => {
    return (
        <Content>
            <Header>
                <HeaderItems>
                    <Button color = "danger" fill = "outlined"><FontAwesomeIcon icon = {faArrowLeft} /> Sair</Button>
                </HeaderItems>
                <HeaderProgress>
                    <div style = {{flex: 1}}>
                        <Button fill = "outlined">Deck: Fast Thinking Drill Lorem...</Button>
                    </div>
                    <div style = {{ flex: 2 }}>Progresso</div>
                </HeaderProgress>
                <HeaderItems>Faça um tour</HeaderItems>
                <HeaderItems>Controles</HeaderItems>
                <HeaderItems>Ícone</HeaderItems>
            </Header>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Content>
    )
}

export default Flashcards;