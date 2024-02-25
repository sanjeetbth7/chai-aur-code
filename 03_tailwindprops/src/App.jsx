import Card from "./components/Card";
import "./App.css";

function App() {

  return (
    <>
      <h1 className="mb-2 bg-green-500 text-black p-5 rounded">Tailwind Test</h1>
      <Card name="Macbook" btnText="visit for more info" />
      <Card name="HP PAVILION"  />
    </>
  );
}

export default App;
