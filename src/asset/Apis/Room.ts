import API from "../../util/Api";

const createRoom = (name: string) => {
  const response = API.post("/api/v1/room/create", { name });
  return response;
};

export { createRoom };
