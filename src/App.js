import "./App.css";
//adding conponents
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <div className="todo-container mt-5 p-2">
     <h1>Todo-App</h1>
     <hr/>
     <Todo />
    </div>
  );
};

export default App;
