import React from "react";
import classes from "./style.scss";
import { saluda } from "./greetingService";

export const GreetingComponent: React.FC = () => {
    const getSaludo = saluda();
    return ( <div className={classes.saludo}>{getSaludo}</div> );
};