import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      const response = await axios.get(`http://localhost:3000/todos/${id}`);
      return response.data;
    },
  }),
});
