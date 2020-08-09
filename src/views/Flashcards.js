import React, { useState, useEffect } from "react";
import {
    Content, Header, HeaderItems, HeaderProgress, Button, ProgressBarOutside,
    ProgressBarInside, DivFlex, StyledLink, CardsSection, Card, CardHeader,
    CardContent, CardAnswer, CardQuestion, LevelButtons, Loader,
    LevelButton, CardSection, LevelButtonLabel, Tooltip, Container
} from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo, faSlidersH, faSync } from "@fortawesome/free-solid-svg-icons";
import Audio from "../components/Audio";
import { useHistory } from "react-router-dom";

const Flashcards = () => {

    const [progressBarValue, setProgressBarValue] = useState(0);
    const [cardMargin, setCardMargin] = useState(340);
    const [cards, setCards] = useState([]);
    const [tooltip, setTooltip] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getFlashcardsById();
    }, []);

    useEffect(() => {
        calcProgress();
    }, [cards])

    const getFlashcardsById = async () => {
        await fetch("https://cors-anywhere.herokuapp.com/https://hackit.app/webapi/v2/decks/10/cards")
            .then(res => res.json())
            .then(response => {
                const cards = response.data.map((item, index) => {

                    // Getting the question text
                    const endIndexQuestioText = item.notes[0].field.indexOf("<br>");
                    const questionText = item.notes[0].field.substring(0, endIndexQuestioText).trim();
        
                    // Getting start and end indexes of the audio tag
                    const audioInit = item.notes[0].field.indexOf("<audio");
                    const audioEnd = item.notes[0].field.indexOf("</audio>") + 8;
        
                    // Getting the audio tag through the indexes
                    const audioHTML = item.notes[0].field.substring(audioInit, audioEnd);
        
                    // Gerring start and end indexes of the audio link
                    const audioLinkInit = audioHTML.indexOf("https");
                    const audioLinkEnd = audioHTML.indexOf("/>");
        
                    // Getting the audio link
                    let audioLink = audioHTML.substring(audioLinkInit, audioLinkEnd);
                    audioLink = audioLink.trim();
                    audioLink = audioLink.slice(0, audioLink.length - 1);
        
                    return {
                        id: item.card.id,
                        deckId: item.card.deckId,
                        questionText,
                        responseText: {text: item.notes[1].field, show: false},
                        audioLink,
                        disableLevelButtons: true,
                        level: null,
                        active: index === 0 ? true : false
                    }
                });
        
                setCards(cards);
            })
            .catch(error => console.log(error));
    }

    const flipCard = (card) => {

        // Loop through cards to update the one that will flip
        const newCards = cards.map(cardLoop => {
            return card === cardLoop ?
                        {
                            ...cardLoop,
                            disableLevelButtons: !cardLoop.disableLevelButtons,
                            responseText: {
                                ...cardLoop.responseText,
                                show: !cardLoop.responseText.show
                            }
                        }
                        :
                        cardLoop;
        });

        setCards(newCards);
    }

    const setLevel = (level, card) => {
        const cardIndex = cards.findIndex(cardLoop => cardLoop === card);

        const newCards = cards.map((cardLoop, loopIndex) => {
            if (card === cardLoop) {
                return {...cardLoop, level, active: false};
            } else if (loopIndex === (cardIndex + 1)) {
                return {...cardLoop, active: true};
            } else {
                return cardLoop;
            }
        })

        setCards(newCards);
        setCardMargin(cardMargin - 925);
    }

    const calcProgress = () => {
        let completedCards = 0;
        cards.map(cardLoop => {
            if (cardLoop.level !== null) {
                completedCards++;
            }
        })

        setProgressBarValue(completedCards / cards.length * 100);
    }

    const hotkey = (e) => {
        
        // Get the current card based on active === true
        const card = cards.find(cardLoop => cardLoop.active);
        const cardIndex = cards.findIndex(cardLoop => card === cardLoop);

        // Do something just if an active card has been found
        if (cardIndex !== -1) {
            switch (e.key) {
                case " ":
                    flipCard(card);
                    break;

                case "1":
                    if (card.responseText.show) {
                        setLevel("facil", card);
                    }
                    break;

                case "2":
                    if (card.responseText.show) {
                        setLevel("bom", card);
                    }
                    break;

                case "3":
                    if (card.responseText.show) {
                        setLevel("dificil", card);
                    }
                    break;

                case "4":
                    if (card.responseText.show) {
                        setLevel("nao_lembro", card);
                    }
                    break;

                default: break;
            }
        }
    }

    const logout = () => {
        localStorage.setItem("isLogged", "false");
        history.push("/login");
    }
    
    return (
        <Container>
            <Content tabIndex = {0} onKeyUp = {(e) => hotkey(e)}>
                <Header>
                    <HeaderItems>
                        <Button color = "danger" fill = "outlined" onClick = {logout}>
                            <FontAwesomeIcon icon = {faArrowLeft} /> Sair
                        </Button>
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
                        <div
                            style = {{marginLeft: "10px", fontSize: "12px"}}
                        >
                            {
                                cards.findIndex(card => card.active) === -1 ?
                                    cards.length
                                    :
                                    cards.findIndex(card => card.active)
                            }
                            
                            /{cards.length}
                        </div>
                    </HeaderProgress>
                    <HeaderItems>
                        <StyledLink href = "#"><FontAwesomeIcon icon = {faInfo}/> Faça um tour</StyledLink>
                    </HeaderItems>
                    <HeaderItems>
                        <StyledLink href = "#"><FontAwesomeIcon icon = {faSlidersH}/> Controles</StyledLink>
                    </HeaderItems>
                    <HeaderItems>
                        <div style = {{paddingTop: "10px"}}>
                            <img src = {require("../assets/fox.png")} alt = "fox-image" />
                        </div>
                    </HeaderItems>
                </Header>

                <CardsSection>
                    {
                        cards.length > 0 ?
                            cards.map((card, index) => (
                                <CardSection
                                    marginLeft = {index === 0 ? `${cardMargin}px` : 0}
                                    opacity = {card.active ? 1 : 0.3}
                                    key = {index}
                                >
                                    <Tooltip show = {tooltip}>&#9251; <b>Dica:</b> Você também pode virar a carta com a tecla espaço do seu teclado!</Tooltip>
                                    <Card>
                                        <CardHeader>
                                            <div>
                                                <Button
                                                    color = "danger"
                                                    onClick = {() => flipCard(card)}
                                                    onMouseOver = {() => setTooltip(true)}
                                                    onMouseLeave = {() => setTooltip(false)}
                                                >
                                                    <FontAwesomeIcon icon = {faSync} /> Virar Carta
                                                </Button>
                                            </div>
                                            <div>
                                                <span style = {{color: card.responseText.show ? "grey" : "black", transition: "0.3s"}}>A </span>
                                                \ 
                                                <span style = {{color: card.responseText.show ? "black" : "grey", transition: "0.3s"}}> B</span>
                                            </div>
                                        </CardHeader>

                                        <CardContent>
                                            <CardAnswer opacity = {card.responseText.show ? 1 : 0}>
                                                <div>{card.responseText.text}</div>
                                            </CardAnswer>

                                            <CardQuestion show = {card.responseText.show}>
                                                <div>{card.questionText}</div>
                                            </CardQuestion>

                                            <Audio src = {card.audioLink} />
                                        </CardContent>
                                    </Card>

                                    <LevelButtons marginLeft = {index === 0 ? `${cardMargin}px` : 0}>
                                        <div>
                                            <div>
                                                <LevelButton
                                                    disabled = {card.disableLevelButtons}
                                                    onClick = {() => setLevel("facil", card)}
                                                >FÁCIL</LevelButton>
                                            </div>
                                            <LevelButtonLabel>Digite 1</LevelButtonLabel>
                                        </div>
                                        <div>
                                            <div>
                                                <LevelButton
                                                    disabled = {card.disableLevelButtons}
                                                    onClick = {() => setLevel("bom", card)}
                                                >BOM</LevelButton>
                                            </div>
                                            <LevelButtonLabel>Digite 2</LevelButtonLabel>
                                        </div>
                                        <div>
                                            <div>
                                                <LevelButton
                                                    disabled = {card.disableLevelButtons}
                                                    onClick = {() => setLevel("dificil", card)}
                                                >DIFÍCIL</LevelButton>
                                            </div>
                                            <LevelButtonLabel>Digite 3</LevelButtonLabel>
                                        </div>
                                        <div>
                                            <div>
                                                <LevelButton
                                                    disabled = {card.disableLevelButtons}
                                                    onClick = {() => setLevel("nao_lembro", card)}
                                                >NÃO LEMBRO</LevelButton>
                                            </div>
                                            <LevelButtonLabel>Digite 4</LevelButtonLabel>
                                        </div>
                                    </LevelButtons>
                                </CardSection>
                            ))
                            :
                            <Loader></Loader>
                    }
                </CardsSection>
            </Content>
        </Container>
    )
}

export default Flashcards;