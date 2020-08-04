import React from "react";
import { Container, Content, Header, HeaderItems, HeaderProgress, Button } from "../styled-components";

const Flashcards = () => {
    return (
        <Content>
            <Header>
                <HeaderItems>
                    <Button>Sair</Button>
                </HeaderItems>
                <HeaderProgress>
                    <div>Botão</div>
                    <div>Progresso</div>
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