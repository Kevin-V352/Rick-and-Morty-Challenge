import styled from "styled-components";

export const Container = styled.nav`
  height: 10vh;
  width: 100vw;
  background-color: var(--tertiary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
`;

export const Selector = styled.select`
  height: 60%;
  width: 40%;
  border: none;
  border-radius: var(--border);
  transition: var(--transition-fast);
`;

export const Option = styled.option`
  color: var(--secondary-color);
  background-color: var(--tertiary-color);
`;
