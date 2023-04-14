import styled from "styled-components";
import AddFriendSvg from "../../../../asset/sidebar/Header/AddFriend.svg";
import AddRoomSvg from "../../../../asset/sidebar/Header/AddRoom.svg";
import SearchSvg from "../../../../asset/sidebar/Header/Search.svg";

export const AddFriendIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${AddFriendSvg});
  background-size: cover;
  &:hover {
    filter: contrast(10%);
  }
`;
export const AddRoomIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${AddRoomSvg});
  background-size: cover;
  &:hover {
    filter: contrast(10%);
  }
`;
export const SearchIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${SearchSvg});
  background-size: cover;
  &:hover {
    filter: contrast(10%);
  }
`;

export const IconContainer = styled.nav`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;
