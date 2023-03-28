import React from 'react';
import { Formik, Form, Field } from 'formik';
import { switchRoutes } from './../../core/router';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';

import { Character } from './character.vm';
import * as classes from './character.styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  Fab,
  TextareaAutosize,
  CardActions,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  character: Character;
  onSavebestSentence: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSavebestSentence } = props;
  const status = character.status;

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={character.image}
            alt={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FingerprintIcon />
                </ListItemIcon>
                <ListItemText primary="Species" secondary={character.species} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FemaleIcon /> <MaleIcon />
                </ListItemIcon>
                <ListItemText primary="Gender" secondary={character.gender} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  {status == 'Alive' ? (
                    <Brightness1Icon color="success" />
                  ) : (
                    <Brightness1Icon color="action" />
                  )}
                </ListItemIcon>
                <ListItemText primary="Status" secondary={character.status} />
              </ListItem>
            </List>

          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Fab variant="extended">
              <Link
                to={switchRoutes.root}
                style={{ textDecoration: 'none', display: 'flex' }}
              >
                <ArrowBackIcon /> Back to list
              </Link>
            </Fab>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};
