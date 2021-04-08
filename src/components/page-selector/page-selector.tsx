import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterList } from "../../redux/actions-creators";
import { StoreInterface } from "../../shared/interfaces";
import * as S from "./page-selector-elements";

const PageSelector: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const store = useSelector((state: StoreInterface) => state);
  const { numberOfPages, currentSpecies } = store;
  const [pageNumber, setPageNumber] = useState<number>(1);

  const setPage = (n: number) => {
    if (pageNumber + n > numberOfPages) {
      setPageNumber(1);
    } else if (pageNumber + n < 1) {
      setPageNumber(numberOfPages);
    } else {
      setPageNumber(pageNumber + n);
    }
  };

  useEffect(() => {
    dispatch(getCharacterList(pageNumber, currentSpecies));
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [currentSpecies]);

  return (
    <S.Container>
      <S.DirectionButton onClick={() => setPage(-1)}>
        <S.ArrowLeft />
      </S.DirectionButton>
      <S.Counter>{`${pageNumber}/${numberOfPages}`}</S.Counter>
      <S.DirectionButton onClick={() => setPage(1)}>
        <S.ArrowRight />
      </S.DirectionButton>
    </S.Container>
  );
};

export default PageSelector;
