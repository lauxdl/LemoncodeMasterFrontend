import React from "react";
import { CenterLayout } from "@/layout/center.layout";
import { Login } from "@/pods/login/login.component";

export const LoginScene: React.FC = () => {
  return (
    <CenterLayout>
      <Login />
    </CenterLayout>
  );
};