import { Character } from './character.api-model';
import axios from 'axios';

let url = "/api/results";

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const { data } = await axios.get<Character>(`${url}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;

  }

};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    if (character.id) {
      console.log(character);
      await axios.put<Character>(`${url}/${character.id}`, character);
      return true;
    } else {
      return false;
    }

  } catch (error) {
    console.error(error);
    return error;
  }

};
