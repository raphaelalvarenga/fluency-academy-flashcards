import styled, { createGlobalStyle } from "styled-components";

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
`

export const HeaderItems = styled.div`
    padding: 20px;
    border: 1px solid rgb(200, 200, 200);
`
export const HeaderProgress = styled.div`
    flex: 1;
    padding: 20px;
    text-align: center;
    border: 1px solid rgb(200, 200, 200);
    display: flex;
    justify-content: space-around;
`

export const Button = styled.button`
    
`