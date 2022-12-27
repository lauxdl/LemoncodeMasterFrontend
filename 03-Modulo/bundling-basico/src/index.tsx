import React from "react";
import { createRoot } from "react-dom/client";
import classes from "./style.scss";
import { LogoComponent } from "./logoComponent";
import { GreetingComponent } from "./greetingComponent";

const root = createRoot(document.getElementById("root"));

root.render(
        <>
            <div className={classes.background}>
                <div className={classes.card}>
                    <LogoComponent />
                    <GreetingComponent />
                </div>
            </div>
        </>
);