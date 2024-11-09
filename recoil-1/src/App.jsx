/* eslint-disable react/prop-types */
import {
  RecoilRoot as RecoilRootProvider,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { todoAtomFamily } from "./atoms";

const App = () => {
  return (
    <RecoilRootProvider>
      <MainApp />
    </RecoilRootProvider>
  );
};

const MainApp = () => {
  return (
    <>
      <h1>RECOIL STATE MANAGEMENT PART - 04</h1>
      <Todo todoId={1} />
      <Todo todoId={1} />
      <Todo todoId={2} />
      <Todo todoId={3} />
    </>
  );
};

// Update the todo component
const UpdateTodo = ({ todoId }) => {
  const updateTodo = useSetRecoilState(todoAtomFamily(todoId));
  return (
    <button
      onClick={() =>
        updateTodo({
          id: todoId,
          title: "Updated Title",
          description: "Updated Description",
        })
      }
    >
      Update Todo
    </button>
  );
};

// Display the current todo component
const Todo = ({ todoId }) => {
  const currentTodo = useRecoilValue(todoAtomFamily(todoId));

  return (
    <div>
      <h2>Todo {currentTodo.id}</h2>
      <p>Title: {currentTodo.title}</p>
      <p>Description: {currentTodo.description}</p>
      <UpdateTodo todoId={todoId} />
    </div>
  );
};

export default App;
