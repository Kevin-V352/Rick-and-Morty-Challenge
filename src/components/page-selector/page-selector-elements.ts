import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const defaultConfigIcon = `
  font-size: var(--big-font-size);
  cursor: poiter;
`;

export const Container = styled.footer`
  height: 10vh;
  width: 100%;
  background-color: var(--tertiary-color);
  display: grid;
  grid-template-columns: repeat(3, 10%);
  grid-template-rows: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 1025px) {
    grid-template-columns: repeat(3, 30%);
  }
`;

export const Counter = styled.span`
  font-size: var(--big-font-size);
  color: var(--primary-color);
`;

export const DirectionButton = styled.button`
  color: var(--primary-color);
  background-color: transparent;
  border: none;
  transition: var(--transition-fast);
  &:hover {
    transform: scale(1.5);
  }
  &:active {
    transform: scale(1);
  }
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  ${defaultConfigIcon}
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  ${defaultConfigIcon}
`;
