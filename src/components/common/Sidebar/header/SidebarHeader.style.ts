import styled from "styled-components";

export const IconContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 30%;
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
  height: 2rem;
  padding: 3% 5%;
  background-color: white;
  position: relative;
  z-index: 1;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleElement = styled.p`
  font-size: 1.5rem;
  font-weight: 650;
  color: ${({ theme }) => theme.Font.Title};
  letter-spacing: 0.2rem;
`;
