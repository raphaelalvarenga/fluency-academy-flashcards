import React, { useState } from "react";
import { LoginContent, FormGroup, Input, LoginButton, InputLabel } from "../styled-components";

const Login = () => {

    const [email, setEmail] = useState({value: "", showLabel: false});
    const [password, setPassword] = useState({value: "", showLabel: false});

    const login = async (event) => {
        event.preventDefault();

        // Fields can't be empty
        if (email.value === "" || password.value === "") {
            email.value === "" ? setEmail({...email, showLabel: true}) : setEmail({...email, showLabel: false});
            password.value === "" ? setPassword({...password, showLabel: true}) : setEmail({...password, showLabel: false});
            return false;
        }
        
        await fetch("https://hackit.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
                email: email.value,
                password: password.value
            }
        })
            .then(res => console.log(res))
            .catch(error => console.log(error));

    }
    
    return (
        <LoginContent>
            <FormGroup>
                <Input
                    placeholder = "E-mail"
                    value = {email.value}
                    onChange = {(e) => setEmail({...email, value: e.target.value, showLabel: false})}
                    required
                ></Input>
                <br/>
                {
                    email.showLabel && <InputLabel>This field is required.</InputLabel>
                }
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder = "Password"
                    type = "password"
                    value = {password.value}
                    onChange = {(e) => setPassword({...password, value: e.target.value, showLabel: false})}
                    required
                ></Input>
                <br/>
                {
                    password.showLabel && <InputLabel>This field is required.</InputLabel>
                }
            </FormGroup>

            <FormGroup>
                <LoginButton onClick = {(event) => login(event)}>Login</LoginButton>
            </FormGroup>
        </LoginContent>
    )
}

export default Login;