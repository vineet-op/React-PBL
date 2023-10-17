import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  //UseRef Hook
  const Passwordref = useRef(null);

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGabcdefg";
    if (numberAllow) str += "012345";
    if (character) str += "#@&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, character, setPassword]);

  useEffect(() => {
    generatePass();
  }, [length, numberAllow, character, generatePass]);

  const copytoCB = useCallback(() => {
    Passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-10 text-orange-500 bg-gray-700">
        Password Generator
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3"
            ref={Passwordref}
          />

          <button onClick={copytoCB} className="bg-orange-500 text-white">
            Copy
          </button>
        </div>
        <div className="flex text-sm dap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={12}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length {length} </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
