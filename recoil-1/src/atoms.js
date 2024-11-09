import { atomFamily } from "recoil";
import TODO from "./todos.json";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (todoId) => TODO.todo.find((todo) => todo.id === todoId),
});
