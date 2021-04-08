import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { getIndividualCharacter } from "../../redux/actions-creators";
import * as S from "./character-card-elements";

interface CCProps {
  name: string;
  img: string;
  id: number;
}

const CharacterCard: FC<CCProps> = ({
  name,
  img,
  id,
}: CCProps): JSX.Element => {
  const dispatch = useDispatch();

  const setIndividualCharacter = () => {
    dispatch(getIndividualCharacter(id));
  };

  return (
    <S.LinkContainer to={`/character/${id}`} onClick={setIndividualCharacter}>
      <S.Container>
        <S.Img src={img} />
        <S.Name>{name}</S.Name>
      </S.Container>
    </S.LinkContainer>
  );
};

export default CharacterCard;
