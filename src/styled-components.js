import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(250,250,250);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial
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
    border: 1px solid rgb(200, 200, 200);
`

export const Header = styled.div`
    display: flex;
    border-collapse: collapse;
    border: 1px solid rgb(200, 200, 200);
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
    border: 1px solid rgb(200, 200, 200);
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
    height: 675px
`
    
export const Card = styled.div`
    border-style: solid;
    min-width: 683px;
    min-height: 340px;
    line-height: 340px;
    text-align: center;
    margin-right: 200px;
    transition: 0.5s;

    ${
        props => props.marginLeft && css`
            margin-left: ${props.marginLeft}
        `
    }
`