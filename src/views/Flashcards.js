import React, { useState } from "react";
import {
    Content, Header, HeaderItems, HeaderProgress, Button, ProgressBarOutside,
    ProgressBarInside, DivFlex, StyledLink, CardsSection, Card, CardHeader,
    CardContent, CardAnswer, CardQuestion, CardAudio, PlayButton, DifficultButtons,
    DifficultButton, CardSection, DifficultButtonLabel
} from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo, faSlidersH, faSync, faPlay } from "@fortawesome/free-solid-svg-icons";

const Flashcards = () => {

    const [progressBarValue, setProgressBarValue] = useState(0);
    const [cardMargin, setCardMargin] = useState(340);
    const [cards, setCards] = useState([1, 2, 3, 4, 5]);
    
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
                {
                    cards.map((card, index) => (
                        <CardSection marginLeft = {index === 0 ? `${cardMargin}px` : 0} key = {index}>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <Button color = "danger">
                                            <FontAwesomeIcon icon = {faSync} /> Virar Carta
                                        </Button>
                                    </div>
                                    <div>A \ B</div>
                                </CardHeader>

                                <CardContent>
                                    <CardAnswer>
                                        <div>Sua empresa não é tão bem-sucedida quanto a empresa dele.</div>
                                    </CardAnswer>

                                    <CardQuestion>
                                        <div>Your company is not as successful as his company.</div>
                                    </CardQuestion>

                                    <CardAudio>
                                        <div>Áudio</div>
                                        <div>
                                            <PlayButton><FontAwesomeIcon icon = {faPlay} /></PlayButton>
                                        </div>
                                    </CardAudio>
                                </CardContent>
                            </Card>

                            <DifficultButtons marginLeft = {index === 0 ? `${cardMargin}px` : 0}>
                                <div>
                                    <div>
                                        <DifficultButton>FÁCIL</DifficultButton>
                                    </div>
                                    <DifficultButtonLabel>Digite 1</DifficultButtonLabel>
                                </div>
                                <div>
                                    <div>
                                        <DifficultButton>BOM</DifficultButton>
                                    </div>
                                    <DifficultButtonLabel>Digite 2</DifficultButtonLabel>
                                </div>
                                <div>
                                    <div>
                                        <DifficultButton>DIFÍCIL</DifficultButton>
                                    </div>
                                    <DifficultButtonLabel>Digite 3</DifficultButtonLabel>
                                </div>
                                <div>
                                    <div>
                                        <DifficultButton>NÃO LEMBRO</DifficultButton>
                                    </div>
                                    <DifficultButtonLabel>Digite 4</DifficultButtonLabel>
                                </div>
                            </DifficultButtons>


                            
                            <div style = {{textAlign: "center"}}>
                                <Button
                                    fill = "outlined"
                                    disabled = {index === 0 ? true : false}
                                    onClick = {() => setCardMargin(cardMargin + 925)}
                                >Anterior</Button>

                                <Button
                                    fill = "outlined"
                                    disabled = {index === cards.length - 1 ? true : false}
                                    onClick = {() => setCardMargin(cardMargin - 925)}
                                >Próximo</Button>
                            </div>


                        </CardSection>
                    ))
                }
            </CardsSection>
        </Content>
    )
}

export default Flashcards;