import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="bg-teal-300">
        <h1 className="text-3xl font-bold underline">My Todo's ⭐ </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
