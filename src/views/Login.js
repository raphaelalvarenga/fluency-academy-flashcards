import React from "react";
import { LoginContent, FormGroup, Input, LoginButton } from "../styled-components";

const Login = () => {
    return (
        <LoginContent>
            <FormGroup>
                <Input placeholder = "Login"></Input>
            </FormGroup>

            <FormGroup>
                <Input placeholder = "Password" type = "password"></Input>
            </FormGroup>

            <FormGroup>
                <LoginButton>Login</LoginButton>
            </FormGroup>
        </LoginContent>
    )
}

export default Login;