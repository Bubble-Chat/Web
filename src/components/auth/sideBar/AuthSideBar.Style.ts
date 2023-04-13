import styled from "styled-components";
import Icon from "../../../asset/Icon.svg";

export const IconBox = styled.div`
  width: 16rem;
  height: 16rem;
  background-image: url(${Icon});
  background-size: cover;
  margin-bottom: 2rem;
`;

export const SloganTitle = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

export const SloganSubTitle = styled.p`
  font-size: 1.125rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: white;
`;

export const MainBackground = styled.nav`
  width: 50%;
  height: 100%;
  background-color: #9867ff;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const Wrap = styled.nav`
  margin: 0 auto;
`;
