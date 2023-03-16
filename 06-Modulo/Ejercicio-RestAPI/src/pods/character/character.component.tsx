import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';

// import { formValidation } from './hotel.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
 // const { character, onSave } = props;

  return (<>test</>
    // <Formik
    //   onSubmit={onSave}
    //   initialValues={character}
    //   enableReinitialize={true}
    //   validate={formValidation.validateForm}
    // >
    //   {() => (
    //     <Form className={classes.root}>
    //       <TextFieldComponent name="name" label="Name" />
    //       <TextFieldComponent name="address" label="Address" />
    //       <TextFieldComponent
    //         name="description"
    //         label="Description"
    //         multiline={true}
    //         rows={3}
    //       />
    //       <Button type="submit" variant="contained" color="primary">
    //         Save
    //       </Button>
    //     </Form>
    //   )}
    // </Formik>
  );
};
