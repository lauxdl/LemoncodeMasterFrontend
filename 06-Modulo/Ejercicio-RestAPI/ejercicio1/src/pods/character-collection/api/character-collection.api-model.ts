export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationApi;
  location: LocationApi;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationApi {
  name: string;
  url: string;
}
