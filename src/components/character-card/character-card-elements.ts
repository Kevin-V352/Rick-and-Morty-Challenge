import styled from "styled-components";
import { Link } from "react-router-dom";

export const Name = styled.span`
  color: var(--primary-color);
  font-size: var(--big-font-size);
  width: min-content;
`;

export const LinkContainer = styled(Link)`
  height: 93%;
  width: 93%;
  text-decoration: none;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--tertiary-color);
  border-radius: var(--border);
  transition: var(--transition-fast);
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: scale(1.06);
    ${Name} {
      color: var(--secondary-color);
    }
  }
  &:active {
    transform: scale(1);
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;
