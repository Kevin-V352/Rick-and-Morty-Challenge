import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreInterface } from "../../shared/interfaces";
import * as S from "./individual-character-elements";

const IndividualCharacter: FC = (): JSX.Element => {
  const characterInfo = useSelector(
    (state: StoreInterface) => state.characterInfo
  );

  return (
    <S.Container>
      <S.SubContainer>
        <S.Img src={characterInfo.image} />
        <S.infoList>
          <S.ItemInfo>Name: {characterInfo.name}</S.ItemInfo>
          <S.ItemInfo>Status: {characterInfo.status}</S.ItemInfo>
          <S.ItemInfo>Species: {characterInfo.species}</S.ItemInfo>
          <S.ItemInfo>Gender: {characterInfo.gender}</S.ItemInfo>
          <S.ItemInfo>Origin: {characterInfo.origin?.name}</S.ItemInfo>
        </S.infoList>
      </S.SubContainer>
    </S.Container>
  );
};

export default IndividualCharacter;
