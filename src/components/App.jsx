import React, {useState} from "react";

function App() {
  
  setInterval(nnew, 1000)

  let time = new Date().toLocaleTimeString();

  const [Time,fun] = useState(time);
  

function nnew(){
 const  newTime = new Date().toLocaleTimeString();
    fun(newTime);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick = {nnew}>Get TIme</button>
    </div>
  );
}

export default App;
