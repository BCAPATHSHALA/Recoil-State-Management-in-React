/* eslint-disable react/prop-types */
import {
  RecoilRoot as RecoilRootProvider,
  useRecoilValueLoadable,
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
      <h1>RECOIL STATE MANAGEMENT PART - 05</h1>
      <Todo todoId={1} />
      <Todo todoId={2} />
      <Todo todoId={3} />
    </>
  );
};

// Display the current todo component
const Todo = ({ todoId }) => {
  const currentTodo = useRecoilValueLoadable(todoAtomFamily(todoId));

  if (currentTodo.state === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Todo {currentTodo.contents.id}</h2>
      <p>Title: {currentTodo.contents.title}</p>
      <p>Description: {currentTodo.contents.description}</p>
    </div>
  );
};

export default App;
