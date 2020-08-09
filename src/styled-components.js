import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(250,250,250);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%
`

export const Content = styled.div`
    margin: auto;
    width: 1366px;
    height: 768px;
    background-color: rgb(246,253,255);
    outline-style: none;
`

export const Header = styled.div`
    display: flex;
    border-collapse: collapse;
    background-color: rgb(252,253,254);
    height: 60px;
    line-height: 60px;
`

export const HeaderItems = styled.div`
    border: 1px solid rgb(200, 200, 200);
    padding: 0 20px;
`
export const HeaderProgress = styled.div`
    flex: 1;
    border-top: 1px solid rgb(200, 200, 200);
    border-bottom: 1px solid rgb(200, 200, 200);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
`

export const Button = styled.button`
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    outline-style: none;
    padding: 5px 15px;
    transition: 0.3s;
    &:hover {
        background-color: rgb(240, 240, 240);
    }

    ${
        props => props.color === "danger" && css`
            color: rgb(242,69,86);
        `
    }

    ${
        props => props.fill === "outlined" && css`
            border-style: solid;
            border-radius: 5px;
            border-color: rgb(200, 200, 200)
        `
    }
`
export const ProgressBarOutside = styled.div`
    border-style: solid;
    height: 25px;
    line-height: 25px;
    border-color: rgb(200, 200, 200);
    border-width: 1px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
`
    
    export const ProgressBarInside = styled.div`
    background-color: rgb(64,212,111);
    height: 25px;
    line-height: 25px;
    width: 0;
    margin-left: 20px;
    transition: 0.5s;

    ${
        props => props.percent  && css`
            width: ${props.percent};
            color: rgb(255, 255, 255);
            margin-left: 0;
            text-align: right;
        `
    }
`

export const DivFlex = styled.div`
    ${
        props => props.flex && css`
            flex: ${props.flex}
        `
    }
`

export const StyledLink = styled.a`
    color: rgb(72,174,224);
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
`

export const Tooltip = styled.div`
    margin: 0 0 10px 35px;
    color: rgb(180, 180, 180);
    font-family: Arial;
    font-size: 13px;
    transition: 0.3s;
    
    ${
        props => props.show ? css`opacity: 1;` : css`opacity: 0;`
    }
`

export const CardsSection = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    height: 675px;
    border-left: 1px solid rgb(200, 200, 200);
    border-right: 1px solid rgb(200, 200, 200);
    border-bottom: 1px solid rgb(200, 200, 200);
`

export const CardSection = styled.div`
    transition: 0.5s;
    border-width: 1px;
    margin-right: 200px;
    ${
        props => {
            if (props.marginLeft) {
                css`margin-left: ${props.marginLeft};`
            }

            if (props.opacity) {
                css`opacity: ${props.opacity};`
            }

            return css;
        }
    }
`

export const Card = styled.div`
    border-style: solid;
    min-width: 683px;
    min-height: 340px;
    text-align: center;
    padding: 15px 20px;
    border-width: 1px;
    background-color: rgb(255, 255, 255);
    border-color: rgb(205,224,226);
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgb(205,224,226);
`
    

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
`

export const CardContent = styled.div`
    text-align: left;
    padding: 0 15px;
`

export const CardAnswer = styled.div`
    height: 100px;
    display: flex;
    align-items: flex-end;
    width: 50%;
    color: rgb(180, 180, 180);
    font-size: 18px;
    transition: 0.3s;
    
    ${
        props => css`opacity: ${props.opacity === 1 ? 1 : 0};`
    }
`

export const CardQuestion = styled.div`
    font-size: 30px;
    height: 150px;
    font-weight: bold;
    width: 90%;

    ${
        props => props.show ? css`color: black;` : css`color: rgb(242,69,86);`
    }
    
`

export const CardAudio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    align-items: flex-end;
`
export const PlayButton = styled.button`
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 25px;
    border-style: none;
    background-color: rgb(72, 174, 224);
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: 0.3s;
    outline-style: none;
    &:hover {
        background-color: rgb(102, 204, 254);
    }
`

export const LevelButtons = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 683px;
    margin: auto;
`

export const LevelButton = styled.button`
    padding: 25px 0px;
    border-style: none;
    border-radius: 8px;
    margin-top: 50px;
    font-weight: bold;
    transition: 0.3s;
    width: 130px;
    outline-style: none;

    ${
        props => {
            if (!props.disabled) {
                return css`
                    background-color: rgb(72, 174, 224);
                    color: rgb(255, 255, 255);
                    cursor: pointer;
                    border-style: solid;
                    border-color: rgb(72, 174, 224);
                    &:hover {
                        background-color: rgb(102, 204, 254);
                        border-color: rgb(102, 204, 254);
                    }
                `;
            } else {
                return css`
                    background-color: rgb(238,248,251);
                    color: rgb(201,223,229);
                    border-style: solid;
                    border-color: rgb(201,223,229);
                `
            }
        }
    }
`
export const LevelButtonLabel = styled.div`
    margin-top: 10px;
    color: rgb(180, 180, 180);
`

export const AudioTrack = styled.div`
    width: 350px;
    height: 50px;
`

export const AudioBackgroundGrey = styled.div`
    height: 50px;
    background-color: rgb(211,211,211);

    ${
        props => css`width: ${props.width}%;`
    }
`

export const AudioBackgroundRed = styled.div`
    height: 50px;
    margin-top: -50px;
    background-color: rgb(242,69,86);
    ${
        props => {
            return css`
                transition: ${props.duration} linear;
                width: ${props.width};
            `
        }
    }
`

export const AudioFrequencyHigh = styled.div`
    display: flex;
    margin-top: -50px;
    height: 25px;
`

export const AudioFrequencyLow = styled.div`
    display: flex;
    height: 25px;
    align-items: flex-end;
`

export const AudioFrequencyTick = styled.div`
    width: 2px;
    
    background-color: white;

    ${
        props => css`height: ${props.tick}px;`
    }
`

export const LoginContent = styled.form`
    border-style: solid;
    border-color: rgb(205,224,226);
    border-radius: 8px;
    padding: 18px 10px;
    width: 400px;
    margin: auto;
    margin-top: 100px;
`

export const FormGroup = styled.div`
    padding: 14px 0;
    text-align: center;
`

export const Input = styled.input`
    border-style: none;
    border-bottom-style: solid;
    background-color: transparent;
    border-width: 1px;
    width: 300px;
    outline-style: none;
    font-size: 18px;
    text-align: center;
`

export const LoginButton = styled.button`
    border-style: none;
    border-radius: 3px;
    padding: 5px 0;
    background-color: rgb(72, 174, 224);
    color: white;
    box-shadow: 1px 1px 5px 1px rgb(72, 174, 224);
    width: 100px;
    font-size: 18px;
    outline-style: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(102, 204, 254);
    }
`

export const InputLabel = styled.small`
    text-align: start;
    font-family: Arial;
    font-weight: bold;
    color: rgb(242,69,86);
`

export const Loader = styled.div`
    border: 16px solid rgb(205,224,226);
    border-top: 16px solid rgb(102, 204, 254);
    margin: auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`