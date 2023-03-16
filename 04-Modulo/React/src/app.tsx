import React from "react";
import { AppRouter } from "@/router/app.router";
import { ProfileProvider, SearchOrgProvider } from "@/core/providers";
import { LoginScene } from "./scenes";

export const App = () => {
  return (
    <ProfileProvider>
      <SearchOrgProvider>
        <AppRouter />
      </SearchOrgProvider>
    </ProfileProvider>
  );
};
