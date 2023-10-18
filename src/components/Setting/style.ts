import styled from "styled-components";

export const Icon = styled.div`
  background-color: gray;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const ContentsContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 86%;
  height: 1.5rem;
  padding: 3%;
  margin: 4%;
  border-radius: 0.5rem;
  &:hover {
    background-color: #f3edff;
  }
  &:active {
    background-color: #ede4ff;
  }
`;

export const ContentsContext = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: #515151;
`;
