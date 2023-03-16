import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { CenterLayout } from "@/layout/center.layout";
import { LoginFormData, createEmptyFormData } from "./login.vm";
import { routes } from "@/router/routes";
import { doLogin } from "./login.api";
import { ProfileContext } from "@/core/providers/profile";

export const Login: React.FC = (props) => {
  const [formData, setFormData] = React.useState<LoginFormData>(
    createEmptyFormData()
  );

  const handleChange = (field: keyof LoginFormData) => (e) =>
    setFormData({
      ...formData,
      [field]: e.target.value,
    });

  const navigate = useNavigate();
  const { setUserProfile } = React.useContext(ProfileContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doLogin(formData.username, formData.password).then((success) => {
      if (success) {
        setUserProfile({ username: formData.username });
        navigate(routes.list);
      } else {
        alert("User / password incorrect!!");
      }
    });
  };

  return (
    <CenterLayout>
      <Card sx={{ padding: "20px" }}>
        <CardHeader title="Login" />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Username"
              label="Username"
              value={formData.username}
              onChange={handleChange("username")}
            />
            <TextField
              placeholder="Password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </CenterLayout>
  );
};
