import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import FindInPageIcon from '@mui/icons-material/FindInPage';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character Id">{character.id}</Avatar>}
        title={character.name}
        subheader={character.status + ' - ' + character.species }
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%'}}
          />
          <Typography variant="subtitle2" gutterBottom style={{ paddingTop: '10px' }}>
          <label aria-label="Gender"><strong>Gender:</strong> </label>
            {character.gender}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <label aria-label="Last known location"><strong>Last known location:</strong> </label>
            {character.location}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)} aria-label="See More Info">
          <FindInPageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
