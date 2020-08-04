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
    text-align: center;
    border: 1px solid rgb(200, 200, 200);
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
`

export const Button = styled.button`
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    outline-style: none;
    padding: 5px 15px;

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
        