import React, { useState } from "react";
import { Container, Content, Header, HeaderItems, HeaderProgress, Button, ProgressBarOutside, ProgressBarInside, DivFlex } from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Flashcards = () => {

    const [progressBarValue, setProgressBarValue] = useState(0);
    
    return (
        <Content>
            <Header>
                <HeaderItems>
                    <Button color = "danger" fill = "outlined"><FontAwesomeIcon icon = {faArrowLeft} /> Sair</Button>
                </HeaderItems>
                <HeaderProgress>
                    <DivFlex flex = {1}>
                        <Button fill = "outlined">Deck: Fast Thinking Drill Lorem...</Button>
                    </DivFlex>
                    <DivFlex flex = {2}>
                        <ProgressBarOutside>
                            <ProgressBarInside percent = {`${progressBarValue}%`}>
                                {
                                    progressBarValue >= 10
                                    &&
                                    <div style = {{marginRight: "10px"}}>{`${progressBarValue}%`}</div>
                                }
                            </ProgressBarInside>
                            {
                                progressBarValue < 10
                                &&
                                <div style = {{marginLeft: "10px"}}>{`${progressBarValue}%`}</div>
                            }
                        </ProgressBarOutside>
                    </DivFlex>
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