import styled from "styled-components";

export const MainNav = styled.nav`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  font-size: 6rem;
  font-weight: 600;
`;

export const LoginBtnWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

export const LoginBtn = styled.p`
  padding: 1rem 1.8rem;
  border-radius: 0.3rem;
  font-size: 1.125rem;
  color: white;
  background-color: #9867ff;
  display: inline-block;
  font-weight: 600;
  margin: 0rem auto 1rem auto;
  &:hover {
    background-color: #7d4ee0;
  }
  &:active {
    background-color: #56369a;
  }
`;

export const LoginStateBtn = styled.p`
  margin-top: 1rem;
  color: #9867ff;
  font-weight: 600;
  font-size: 0.8rem;
  &:hover {
    color: #7d4ee0;
  }
  &:active {
    color: #56369a;
  }
`;
