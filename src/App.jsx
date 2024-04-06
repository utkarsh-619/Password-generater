import { useState , useCallback , useEffect } from "react"

function App() {
  const [length, setLength] = useState(6);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNum) str += "0123456789";
    if(isChar) str += "!@#$%^&*{}<>?/.,";

    for(let i=0;i<length;i++){
      let rand= Math.floor(Math.random() * str.length);
      let char = str[rand];

      pass += char;
    }
    setPassword(pass);
  }, [length, isNum, isChar, setPassword])
  
  useEffect(() => {
    passwordGenerator();
  }, [length, isNum, isChar, setPassword]);  

  return (
      <>
        <div className="max-w-3xl mx-auto shadow-md rounded-xl p-4 my-8 text-orange-500 bg-gray-700 ">
          <h1 className="text-3xl text-center text-white mb-6">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
              type="text" 
              // value={password}
              defaultValue={password}
              className="outline-none w-full px-3 py-1 text-lg rounded-lg"
              placeholder="Password"
            />
            <button className="bg-blue-600 rounded-lg text-white w-24 ml-2"> 
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
              id="rangeInput"
              type="range" 
              min={6}
              max={50}
              defaultValue={length}
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="rangeInput" className="text-white ml-2 text-base">length: {length}</label>
            </div>
            <div>
              <input 
              type="checkbox"
              id="NumberAllow"
              defaultValue={isNum}
              onChange={() => {
                setIsNum((prev) => !prev)
              }}
              className="text-lg rounded outline-none text-black ml-4"
              />
              <label htmlFor="NumberAllow" className="text-white ml-2 text-base">NumberAllow</label>

              <input 
              type="checkbox"
              id="CharacterAllow"
              defaultValue={isChar}
              onChange={() => {
                setIsChar((prev) => !prev)
              }}
              className="text-lg rounded outline-none text-black ml-4"
              />
              <label htmlFor="CharacterAllow" className="text-white ml-2 text-base">CharacterAllow</label>
            </div>
          </div>

        </div>
      </>
    )
}

export default App
