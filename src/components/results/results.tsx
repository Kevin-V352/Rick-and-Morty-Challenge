import React, { FC } from "react";
import * as S from "./results-elements";
import { useSelector } from "react-redux";
import { Character, StoreInterface } from "../../shared/interfaces";
import CharacterCard from "../character-card/character-card";

const Results: FC = (): JSX.Element => {
  const currentCharactersArr = useSelector(
    (state: StoreInterface) => state.currentCharactersArr
  );

  return (
    <S.Container>
      {currentCharactersArr.map((character: Character, index: number) => (
        <CharacterCard
          key={index}
          name={character.name}
          img={character.image}
          id={character.id}
        />
      ))}
    </S.Container>
  );
};

export default Results;
