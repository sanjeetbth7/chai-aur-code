import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("antiquewhite");
  return (
    <div style={{backgroundColor:color}} setColor={setColor} className="w-full h-screen duration-200">
      <Header setColor={setColor} />
    </div>
  );
}

export default App;
