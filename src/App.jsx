import { useState } from "react";

 function App(){
  let [num, setNum] = useState(0);
  function addNum(){
    setNum(num + 1);
    console.log(num);
  };

  function subNum(){
    if(num == 0){
      console.log('ab nh hoskta');
    }
    else{
      setNum(num-1);
    }
  }

   return(
    <>
    <div className="text-center">
    <h1 className="text-4xl ms-5 mt-10">Counter App  </h1>
    <button  onClick={addNum} className="rounded bg-cyan-600 px-5 py-1 text-white text-2xl ms-5 mt-10">+</button>
    <span className="ms-5">{num}</span>
    <button onClick={subNum} className="rounded bg-cyan-600 px-5 py-1 text-white text-2xl ms-5 mt-10">-</button>
    </div>
    </>   

   )
 }

export default App