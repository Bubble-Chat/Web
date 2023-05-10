import styled from "styled-components";

export const IconElement = styled.div`
  width: 2rem;
  height: 2rem;
  background-size: cover;
  background-color: gray;
  margin-left: 1.5rem;
`;

export const IconContainer = styled.nav`
  display: flex;
`;

/**
 * &:hover {
    filter: contrast(10%);
  }
 */

export const MainHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 3% 5%;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleElement = styled.p`
  font-size: 1.5rem;
  font-weight: 650;
  color: #515151;
  letter-spacing: 0.2rem;
`;
