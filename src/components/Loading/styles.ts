import styled from "styled-components";
import { Spin } from "styles/animations";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 6px solid;
  border-radius: 50%;

  height: 3.5rem;
  width: 3.5rem;

  border-color: #777;
  border-top-color: #ccc;

  animation: ${Spin} 1s linear infinite;
`;
