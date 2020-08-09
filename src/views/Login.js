import React, { useState } from "react";
import { LoginContent, FormGroup, Input, LoginButton, InputLabel, Loader } from "../styled-components";
import { useHistory } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState({value: "", showLabel: false});
    const [password, setPassword] = useState({value: "", showLabel: false});
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const login = async (event) => {
        event.preventDefault();

        // Fields can't be empty
        if (email.value === "" || password.value === "") {
            email.value === "" ? setEmail({...email, showLabel: true}) : setEmail({...email, showLabel: false});
            password.value === "" ? setPassword({...password, showLabel: true}) : setEmail({...password, showLabel: false});
            return false;
        }

        setIsLoading(true);
        
        await fetch("https://cors-anywhere.herokuapp.com/https://hackit.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
            .then(res => {
                if (email.value === "qa14@hackit.app" && password.value === "qa14") {
                    localStorage.setItem("isLogged", "true");
                    history.push("/");
                }
            })
            .catch(error => console.log(error))

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

            {
                isLoading ? <Loader size = "small"></Loader> : (
                    <FormGroup>
                        <LoginButton onClick = {(event) => login(event)}>Login</LoginButton>
                    </FormGroup>
                )
            }
            
        </LoginContent>
    )
}

export default Login;