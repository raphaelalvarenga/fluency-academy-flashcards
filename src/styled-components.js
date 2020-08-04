import styled, { createGlobalStyle, css } from "styled-components";

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
            color: red;
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

export const CardsSection = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    height: 675px;
    border-left: 1px solid rgb(200, 200, 200);
    border-right: 1px solid rgb(200, 200, 200);
    border-bottom: 1px solid rgb(200, 200, 200);
`
    
export const Card = styled.div`
    border-style: solid;
    min-width: 683px;
    min-height: 340px;
    text-align: center;
    margin-right: 200px;
    transition: 0.5s;
    padding: 15px 20px;
    background-color: rgb(255, 255, 255);
    border-color: rgb(200, 200, 200);
    border-width: 1px;
    border-radius: 20px;

    ${
        props => props.marginLeft && css`
            margin-left: ${props.marginLeft}
        `
    }
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
`

export const CardQuestion = styled.div`
    font-size: 30px;
    height: 150px;
    font-weight: bold;
    width: 90%;
`

export const CardAudio = styled.div`
    display: flex;
    justify-content: space-between;
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
    &:hover {
        background-color: rgb(42, 142, 182);
    }
`

// border-style: solid;
export const DifficultButtons = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 683px;
    margin: auto;
`

export const DifficultButton = styled.button`
    padding: 25px 45px;
    background-color: rgb(72, 174, 224);
    border-style: none;
    color: rgb(255, 255, 255);
    border-radius: 8px;
    margin-top: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: rgb(42, 142, 182);
    }
`

export const CardSection = styled.div`
    
`

export const DifficultButtonLabel = styled.div`
    margin-top: 10px;
    color: rgb(180, 180, 180);
`