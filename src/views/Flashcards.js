import React, { useState } from "react";
import {
    Container, Content, Header, HeaderItems, HeaderProgress, Button,
    ProgressBarOutside, ProgressBarInside, DivFlex, StyledLink, CardsSection,
    Card
} from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Flashcards = () => {

    const [progressBarValue, setProgressBarValue] = useState(0);
    const [cardMargin, setCardMargin] = useState(340);
    
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
                    <div style = {{marginLeft: "10px", fontSize: "12px"}}>10/12</div>
                </HeaderProgress>
                <HeaderItems>
                    <StyledLink href = "#"><FontAwesomeIcon icon = {faInfo}/> Faça um tour</StyledLink>
                </HeaderItems>
                <HeaderItems>
                    <StyledLink href = "#"><FontAwesomeIcon icon = {faSlidersH}/> Controles</StyledLink>
                </HeaderItems>
                <HeaderItems>Ícone</HeaderItems>
            </Header>

            

            <CardsSection>
                <Card marginLeft = {`${cardMargin}px`}>
                    <div style = {{textAlign: "center"}}>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin + 889)}>Anterior</Button>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin - 889)}>Próximo</Button>
                    </div>
                </Card>
                <Card>
                    <div style = {{textAlign: "center"}}>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin + 889)}>Anterior</Button>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin - 889)}>Próximo</Button>
                    </div>
                </Card>
                <Card>
                    <div style = {{textAlign: "center"}}>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin + 889)}>Anterior</Button>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin - 889)}>Próximo</Button>
                    </div>
                </Card>
                <Card>
                    <div style = {{textAlign: "center"}}>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin + 889)}>Anterior</Button>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin - 889)}>Próximo</Button>
                    </div>
                </Card>
                <Card>
                    <div style = {{textAlign: "center"}}>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin + 889)}>Anterior</Button>
                        <Button fill = "outlined" onClick = {() => setCardMargin(cardMargin - 889)}>Próximo</Button>
                    </div>
                </Card>
            </CardsSection>
        </Content>
    )
}

export default Flashcards;