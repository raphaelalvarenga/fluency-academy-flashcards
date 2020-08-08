import React from "react";
import Flashcards from "../views/Flashcards";
import Login from "../views/Login";
import { Route, Redirect, Switch } from "react-router-dom";

// This component represents those routes that user must be logged in to navigate through
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props => true ? (
            <Component {...props} />
        ) : (
            <Redirect to = {{pathname: "/login", state: {from: props.location}}} />
        )}
    />
)

// These are the routes!
const Routes = (props) => {    
    return (
        <Switch>
            <Route path = "/login" component = {Login} />
            <PrivateRoute exact path = "/flashcards" component = {Flashcards} />
        </Switch>
    )
}

export default Routes;