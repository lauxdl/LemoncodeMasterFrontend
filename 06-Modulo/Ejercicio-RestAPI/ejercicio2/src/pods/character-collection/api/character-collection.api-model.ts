export interface CharacterEntityApi {
  id: string;
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
  id: string;
  name: string;
  url: string;
}
