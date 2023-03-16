import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';


let url = "/api/results";

export const getCharacterCollection = async () => {
  const { data } = await axios.get<CharacterEntityApi[]>(url);
  return data;
};
