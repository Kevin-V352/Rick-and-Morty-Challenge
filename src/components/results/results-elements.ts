import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: calc(90vh / 3);
  align-items: center;
  justify-items: center;
  padding-top: 10vh;

  @media (max-width: 1025px) {
    grid-template-columns: 100%;
  }
`;
