import API from "../../util/Api";

const relateFriend = async (friendEmail: string) => {
  const { data } = await API.post("/api/v1/friend/relate", { friendEmail });
  return data;
};

const searchFriend = async (friendName: string) => {
  const { data } = await API.get("/api/v1/user/search", {
    params: { name: friendName },
  });
  return data;
};

const getFriendList = async () => {
  const { data } = await API.get("/api/v1/friend/list");
  return data;
};

export { relateFriend, searchFriend, getFriendList };
