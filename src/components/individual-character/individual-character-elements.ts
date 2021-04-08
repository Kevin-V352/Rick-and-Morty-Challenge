import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  height: 80%;
  width: 80%;
  background-color: var(--tertiary-color);
  border-radius: var(--border);
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-items: center;
  overflow: hidden;

  @media (max-width: 1025px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 50%);
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const infoList = styled.ul`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemInfo = styled.li`
  color: var(--primary-color);
  font-size: var(--big-font-size);
`;
