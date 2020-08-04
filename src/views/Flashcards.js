import React, { useState, useEffect } from "react";
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
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getFlashcardsById();
    }, []);

    const getFlashcardsById = async () => {
        const response = {"meta":{"code":200},"data":[{"card":{"id":468,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":468,"due":1596378830329,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830330,"dateUpdated":1596378830330},"notes":[{"id":935,"cardId":468,"noteType":3,"fieldNumber":0,"field":"Your company is not as successful as his company.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/4.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":936,"cardId":468,"noteType":3,"fieldNumber":1,"field":"Sua empresa não é tão bem-sucedida quanto a empresa dele.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":469,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":469,"due":1596378830335,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830336,"dateUpdated":1596378830336},"notes":[{"id":937,"cardId":469,"noteType":3,"fieldNumber":0,"field":"Grace is as tall as Martha.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/12.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":938,"cardId":469,"noteType":3,"fieldNumber":1,"field":"A Grace é tão alta quanto a Martha.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":470,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":470,"due":1596378830341,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830342,"dateUpdated":1596378830342},"notes":[{"id":939,"cardId":470,"noteType":3,"fieldNumber":0,"field":"The Rolling Stones are not as famous as the Beatles.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/1.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":940,"cardId":470,"noteType":3,"fieldNumber":1,"field":"Os Rolling Stones não são tão famosos quanto os Beatles.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":471,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":471,"due":1596378830349,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830350,"dateUpdated":1596378830350},"notes":[{"id":941,"cardId":471,"noteType":3,"fieldNumber":0,"field":"There are lots of people at the party.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/6.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":942,"cardId":471,"noteType":3,"fieldNumber":1,"field":"Tem muitas pessoas na festa.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":472,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":472,"due":1596378830357,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830358,"dateUpdated":1596378830358},"notes":[{"id":943,"cardId":472,"noteType":3,"fieldNumber":0,"field":"There aren’t many chairs in the kitchen.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/11.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":944,"cardId":472,"noteType":3,"fieldNumber":1,"field":"Não tem muitas cadeiras na cozinha.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":473,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":473,"due":1596378830363,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830364,"dateUpdated":1596378830364},"notes":[{"id":945,"cardId":473,"noteType":3,"fieldNumber":0,"field":"There is a boy waiting at the reception.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/5.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":946,"cardId":473,"noteType":3,"fieldNumber":1,"field":"Tem um menino esperando na recepção.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":474,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":474,"due":1596378830371,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830372,"dateUpdated":1596378830372},"notes":[{"id":947,"cardId":474,"noteType":3,"fieldNumber":0,"field":"Can I have a glass of water?\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/9.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":948,"cardId":474,"noteType":3,"fieldNumber":1,"field":"Você pode me ver um copo de água?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":475,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":475,"due":1596378830377,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830378,"dateUpdated":1596378830378},"notes":[{"id":949,"cardId":475,"noteType":3,"fieldNumber":0,"field":"Can I have your passport, please?\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/2.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":950,"cardId":475,"noteType":3,"fieldNumber":1,"field":"Você pode me dar seu passaporte, por favor?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]},{"card":{"id":476,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1585063553498},"score":{"cardId":476,"due":1596378830385,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830386,"dateUpdated":1596378830386},"notes":[{"id":951,"cardId":476,"noteType":3,"fieldNumber":0,"field":"Can I have the menu?<br><audio controls=\"controls\" preload=\"auto\" autobuffer><source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/10.wav\" /></audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1585063553498},{"id":952,"cardId":476,"noteType":3,"fieldNumber":1,"field":"Você pode me trazer o cardápio?","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1585063553498}]},{"card":{"id":477,"deckId":10,"cardType":3,"dateCreated":1545821702000,"dateUpdated":1545821702000},"score":{"cardId":477,"due":1596378830391,"easiness":2.5,"cca":0,"reviews":0,"dateCreated":1596378830392,"dateUpdated":1596378830392},"notes":[{"id":953,"cardId":477,"noteType":3,"fieldNumber":0,"field":"Alright, all set! Here are your keys.\n                <br><audio controls=\"controls\" preload=\"auto\" autobuffer>\n                    <source src=\"https://s3-sa-east-1.amazonaws.com/carneiro/public/card_audios/d7f2a0-5c89ef/8.wav\" />\n                </audio><br>","fieldName":"Front","dateCreated":1545821702000,"dateUpdated":1545821702000},{"id":954,"cardId":477,"noteType":3,"fieldNumber":1,"field":"Certo, tudo pronto! Aqui estão suas chaves.","fieldName":"Back","dateCreated":1545821702000,"dateUpdated":1545821702000}]}]}
        const cards = response.data.map(item => {

            // Getting the question text
            const endIndexQuestioText = response.data[0].notes[0].field.indexOf("<br>");
            const questionText = response.data[0].notes[0].field.substring(0, endIndexQuestioText).trim();

            // Getting start and end indexes of the audio tag
            const audioInit = response.data[0].notes[0].field.indexOf("<audio");
            const audioEnd = response.data[0].notes[0].field.indexOf("</audio>") + 8;

            // Getting the audio tag through the indexes
            const audioHTML = response.data[0].notes[0].field.substring(audioInit, audioEnd);

            // Gerring start and end indexes of the audio link
            const audioLinkInit = audioHTML.indexOf("https");
            const audioLinkEnd = audioHTML.indexOf("/>");

            // Getting the audio link
            let audioLink = audioHTML.substring(audioLinkInit, audioLinkEnd);
            audioLink = audioLink.trim();
            audioLink = audioLink.slice(0, audioLink.length - 1);

            const audioTag =  (
                <audio controls = "controls" preload = "auto" autobuffer = "true">
                    <source src = {audioLink} />
                </audio>
            );

            return {
                id: item.card.id,
                deckId: item.card.deckId,
                notes: [questionText, response.data[0].notes[1].field],
                audioTag
            }
        });
        console.log(cards);

        setCards(cards);
    }
    
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
                                        <div>{card.notes[1]}</div>
                                    </CardAnswer>

                                    <CardQuestion>
                                        <div>{card.notes[0]}</div>
                                    </CardQuestion>

                                    <CardAudio>
                                        <div>
                                            {card.audioTag}
                                        </div>
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