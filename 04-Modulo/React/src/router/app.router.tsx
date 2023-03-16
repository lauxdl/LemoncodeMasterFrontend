import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DetailScene, ListScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />}></Route>
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
      </Routes>
    </BrowserRouter>
  );
};
