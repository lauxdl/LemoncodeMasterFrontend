import { Character } from './character.api-model';
import axios from 'axios';

let url = "/api/results";

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) { //POST
    axios.put(`${url}/${character.id}`, character);
  } else { //PUT
    axios.post(`${url}`, character);
  }
  return true;
};
