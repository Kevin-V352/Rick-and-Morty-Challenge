import { GET_CHARACTER_LIST, GET_INDIVIDUAL_CHARACTER } from "../actions-types";

const initialState = {
  currentCharactersArr: [],
  characterInfo: {},
  currentSpecies: false,
  numberOfPages: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CHARACTER_LIST:
      return {
        ...state,
        currentCharactersArr: action.payload.characters,
        currentSpecies: action.payload.species,
        numberOfPages: action.payload.numberOfPages,
      };
    case GET_INDIVIDUAL_CHARACTER:
      return {
        ...state,
        characterInfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
