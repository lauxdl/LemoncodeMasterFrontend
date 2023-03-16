import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router/routes";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface MemberDetailEntity {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailScene: React.FC = () => {
  const { id } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntity>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((r) => r.json())
      .then((results) => {
        setMember(results);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "5%" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={member.avatar_url}
                  alt="Avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>id:</b> {member.id}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <b>login:</b> {member.login}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <b>name:</b> {member.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <b>company:</b> {member.company}
                  </Typography>
                  {member.bio !== null && (
                    <Typography variant="body1" color="text.secondary">
                      <b>bio:</b> {member.bio}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "center" }}>
                <Fab variant="extended">
                  <Link to={routes.list} style={{ textDecoration: "none", display:"flex" }}>
                    {" "}
                    <ArrowBackIcon /> Back to list{" "}
                  </Link>
                </Fab>
              </CardActions>
            </Card>
          </>
        )}
      </Box>
    </>
  );
};
