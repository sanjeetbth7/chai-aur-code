import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!#$%^&*()_+{}[]|;:,.";

    for (let i = 1; i <= length; i++)
      pass += str.charAt(Math.floor(Math.random() * str.length));

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // useRef hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="my-8 mx-auto p-4 bg-gray-700 max-w-[90%]  sm:max-w-[600px] rounded-lg">
        <h1 className="text-4xl text-center text-white mb-4 p-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-2xl"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            className="text-white bg-blue-600 p-2 text-lg font-bold font-sans active:bg-blue-700 active:transition-all"
            // onClick={() => {  // working but tring with useRef
            //   navigator.clipboard.writeText(password);
            //   alert(`${password} copied successful`)
            // }}
            onClick={copyPassword}
          >
            copy
          </button>
        </div>
        <div className="m-2 p-2 text-orange-500 font-sans font-bold flex justify-center align-middle flex-col sm:flex-row">
          <div>
            <input
              type="range"
              id="length"
              onChange={(e) => setLength(e.target.value)}
              max={40}
              min={5}
              value={length}
            ></input>
            <label htmlFor="#length" className="m-2 p-2">
              length: {length}
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="num"
              defaultChecked={numAllowed}
              onChange={async () => setNumAllowed((pre) => !pre)}
            ></input>
            <label htmlFor="#num" className="m-2 p-2">
              Number
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="char"
              defaultChecked={charAllowed}
              onChange={async () => setCharAllowed((pre) => !pre)}
            ></input>
            <label htmlFor="#char" className="m-2 p-2">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
