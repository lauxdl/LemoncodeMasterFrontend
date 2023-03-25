import { Character } from './character.api-model';
import axios from 'axios';

let url = "/api/results";

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    console.log(character);
    await axios.put<Character>(`${url}/${character.id}`, character);
    return true;
  } else {
    return false;
  }

};
