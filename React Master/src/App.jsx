import "./index.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-500">Counter value is </h1>
      <Card username="Vineet" />
      <Card username="Ruchi" />
    </>
  );
}

export default App;
