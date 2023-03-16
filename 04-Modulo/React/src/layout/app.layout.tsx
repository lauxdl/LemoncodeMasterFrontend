import React from "react";
import AppNavBar from "@/pods/list/components/app-bar";

interface Props{
    children : React.ReactNode;    
}

export const AppLayout: React.FC<Props> = ({children}) => {
    return <>
                <AppNavBar />
                <main>
                    {children}
                </main>
            </>;
};