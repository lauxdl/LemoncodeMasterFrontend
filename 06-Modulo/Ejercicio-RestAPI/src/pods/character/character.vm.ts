export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Location;
  location: Location;
  episode: string[];
  url: string;
  created: string;
  bestSentences: string;
}
export interface Location {
  name: string;
  url: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  origin: null,
  location: null,
  episode: [],
  url: '',
  created: '',
  bestSentences:'',
});
