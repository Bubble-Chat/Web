import API from "../../util/Api";

const createRoom = (name: string) => {
  API.post("/api/v1/room/create", { name })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

export { createRoom };
