import React from "react";
import classes from "./style.scss";
import logoImg from './content/logo_1.png';

export const LogoComponent: React.FC = () => {
    return(
        <div className={classes.imgContainer}><img alt="Logo" src={logoImg}></img></div>
    );
}