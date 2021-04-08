interface Origin {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: Origin;
}

export interface StoreInterface {
  currentCharactersArr: Character[];
  characterInfo: Character;
  currentSpecies: boolean | string;
  numberOfPages: number;
}
