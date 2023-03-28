import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async ():  Promise<CharacterEntityApi[]> => {
  try {

    return characterCollection;

  } catch (error) {
    console.error(error);
    return error;
  }

};
