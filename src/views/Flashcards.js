import React, { useState, useEffect } from "react";
import {
    Content, Header, HeaderItems, HeaderProgress, Button, ProgressBarOutside,
    ProgressBarInside, DivFlex, StyledLink, CardsSection, Card, CardHeader,
    CardContent, CardAnswer, CardQuestion, CardAudio, PlayButton, LevelButtons,
    LevelButton, CardSection, LevelButtonLabel, Tooltip
} from "../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo, faSlidersH, faSync, faPlay } from "@fortawesome/free-solid-svg-icons";

const Flashcards = () => {

    const [progressBarValue, setProgressBarValue] = useState(0);
    const [cardMargin, setCardMargin] = useState(340);
    const [cards, setCards] = useState([]);
    const [tooltip, setTooltip] = useState(false);

    useEffect(() => {
        getFlashcardsById();
    }, []);

    useEffect(() => {
        calcProgress();
    }, [cards])

    const getFlashcardsById = async () => {
        const response = {"meta":{"code":200},"data":[{"card":{"id":468,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":468,"due":1596378830329,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830330,"dateUpdated":1596378830330},"notes":[{"id":935,"cardId":468,"noteType":3,"fieldNumber":0,"field":"Your company is not as successful as his company.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/4.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":936,"cardId":468,"noteType":3,"fieldNumber":1,"field":"Sua empresa não é tão bem-sucedida quanto a empresa dele.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":469,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":469,"due":1596378830335,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830336,"dateUpdated":1596378830336},"notes":[{"id":937,"cardId":469,"noteType":3,"fieldNumber":0,"field":"Grace is as tall as Martha.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/12.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":938,"cardId":469,"noteType":3,"fieldNumber":1,"field":"A Grace é tão alta quanto a Martha.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":470,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":470,"due":1596378830341,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830342,"dateUpdated":1596378830342},"notes":[{"id":939,"cardId":470,"noteType":3,"fieldNumber":0,"field":"The Rolling Stones are not as famous as the Beatles.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/1.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":940,"cardId":470,"noteType":3,"fieldNumber":1,"field":"Os Rolling Stones não são tão famosos quanto os Beatles.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":471,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":471,"due":1596378830349,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830350,"dateUpdated":1596378830350},"notes":[{"id":941,"cardId":471,"noteType":3,"fieldNumber":0,"field":"There are lots of people at the party.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/6.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":942,"cardId":471,"noteType":3,"fieldNumber":1,"field":"Tem muitas pessoas na festa.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":472,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":472,"due":1596378830357,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830358,"dateUpdated":1596378830358},"notes":[{"id":943,"cardId":472,"noteType":3,"fieldNumber":0,"field":"There aren’t many chairs in the kitchen.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/11.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":944,"cardId":472,"noteType":3,"fieldNumber":1,"field":"Não tem muitas cadeiras na cozinha.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":473,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":473,"due":1596378830363,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830364,"dateUpdated":1596378830364},"notes":[{"id":945,"cardId":473,"noteType":3,"fieldNumber":0,"field":"There is a boy waiting at the reception.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/5.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":946,"cardId":473,"noteType":3,"fieldNumber":1,"field":"Tem um menino esperando na recepção.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":474,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":474,"due":1596378830371,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830372,"dateUpdated":1596378830372},"notes":[{"id":947,"cardId":474,"noteType":3,"fieldNumber":0,"field":"Can I have a glass of water?\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/9.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":948,"cardId":474,"noteType":3,"fieldNumber":1,"field":"Você pode me ver um copo de água?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":475,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":475,"due":1596378830377,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830378,"dateUpdated":1596378830378},"notes":[{"id":949,"cardId":475,"noteType":3,"fieldNumber":0,"field":"Can I have your passport, please?\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/2.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":950,"cardId":475,"noteType":3,"fieldNumber":1,"field":"Você pode me dar seu passaporte, por favor?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":476,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1585063553498},"score":{"cardId":476,"due":1596378830385,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830386,"dateUpdated":1596378830386},"notes":[{"id":951,"cardId":476,"noteType":3,"fieldNumber":0,"field":"Can I have the menu?<br><audio controls=\"controls\" preload=\"auto\" autobuffer><source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/10.wav\" /></audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1585063553498},{"id":952,"cardId":476,"noteType":3,"fieldNumber":1,"field":"Você pode me trazer o cardápio?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1585063553498}]},{"card":{"id":477,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":477,"due":1596378830391,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830392,"dateUpdated":1596378830392},"notes":[{"id":953,"cardId":477,"noteType":3,"fieldNumber":0,"field":"Alright, all set! Here are your keys.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/8.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":954,"cardId":477,"noteType":3,"fieldNumber":1,"field":"Certo, tudo pronto! Aqui estão suas chaves.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]}]}
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
    
    return (
        <Content tabIndex = {0} onKeyUp = {(e) => hotkey(e)}>
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
                <HeaderItems>Ícone</HeaderItems>
            </Header>

            <CardsSection>
                {
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

                                    <CardAudio>
                                        <div>
                                            <audio
                                                controls = "controls"
                                                preload = "auto"
                                                autobuffer = "true" id = {`audio-${index}`}
                                                style = {{display: "none"}}
                                            >
                                                <source src = {card.audioLink} />
                                            </audio>
                                        </div>
                                        <div>
                                            <PlayButton onClick = {() => {
                                                const audio = document.getElementById(`audio-${index}`)
                                                audio.play();
                                            }}><FontAwesomeIcon icon = {faPlay} /></PlayButton>
                                        </div>
                                    </CardAudio>
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
                }
            </CardsSection>
        </Content>
    )
}

export default Flashcards;