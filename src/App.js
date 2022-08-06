import "./App.css";
//adding conponents
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <div className="todo-container mt-5 ">
      <h1 className="px-2 py-3 text-light">لیست کار های روزمره</h1>
      <div className="py-2">
        <Todo />
      </div>
    </div>
  );
};

export default App;
