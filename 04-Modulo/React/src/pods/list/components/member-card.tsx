import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "@/pods/list/list.vm";
import { routes } from "@/router/routes";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props{
    member : MemberEntity;
}

const linkStyle = {
    color: 'brown',
    size: '15px',
    textDecoration: 'none'
}

export const MemberCard: React.FC <Props> = (props) => {

    const { member } = props;

    return (
        <Card component="li" className="cardStyle shadow" sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 230 }}
                image={member.avatar_url}
                title="Avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {member.login}
                </Typography>
                <Typography variant="body1">
                   
                    <GitHubIcon />{member.id}

                </Typography>
                <CardActions disableSpacing sx={{ display:'flex', justifyContent:'center',  marginTop: '10px' }}>
                    <Fab variant="extended">
                        <Link style={linkStyle} to={ {pathname: routes.detail(member.login) }}> See More </Link> 
                    </Fab>
                </CardActions>
            </CardContent>
           
      </Card>

       
    );
}