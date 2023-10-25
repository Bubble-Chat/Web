import API from "../../util/Api";

const relateFriend = (friendEmail: string) => {
  API.post("/api/v1/friend/relate", { friendEmail })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

const searchFriend = (friendName: string) => {
  API.get("/api/v1/user/search", { params: { name: friendName } })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

export { relateFriend, searchFriend };
