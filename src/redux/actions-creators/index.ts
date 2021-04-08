import axios from "axios";
import { Dispatch } from "redux";
import { GET_CHARACTER_LIST, GET_INDIVIDUAL_CHARACTER } from "../actions-types";

export const getCharacterList = (
  numberPage: number,
  species: string | boolean
) => {
  return (dispatch: Dispatch) => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${numberPage}${
          species ? "&species=" + species : ""
        }`
      )
      .then((result) =>
        dispatch({
          type: GET_CHARACTER_LIST,
          payload: {
            characters: result.data.results,
            numberOfPages: result.data.info.pages,
            species,
          },
        })
      );
  };
};

export const getIndividualCharacter = (id: number) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((result) =>
        dispatch({ type: GET_INDIVIDUAL_CHARACTER, payload: result.data })
      );
  };
};
