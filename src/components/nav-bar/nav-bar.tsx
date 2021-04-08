import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacterList } from "../../redux/actions-creators";
import { getSpecies } from "../../shared/services";
import * as S from "./nav-bar-elements";

const NavBar: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [listSpecies, setListSpecies] = useState<string[]>();

  useEffect(() => {
    setList();
  }, []);

  const getFilteredResults = (event: any) => {
    const currentTarget: string = event?.target.value;
    dispatch(
      getCharacterList(
        1,
        currentTarget === "All characters" ? false : currentTarget
      )
    );
  };

  const setList = async () => {
    try {
      const speciesList: string[] = await getSpecies();
      setListSpecies(["All characters", ...speciesList]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Selector onChange={getFilteredResults}>
        {listSpecies?.map((specie: string, index: number) => (
          <S.Option key={index}>{specie}</S.Option>
        ))}
      </S.Selector>
    </S.Container>
  );
};

export default NavBar;
