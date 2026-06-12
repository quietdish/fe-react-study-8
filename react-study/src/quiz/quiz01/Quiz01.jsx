import { useState } from "react";
import './Quiz01.css';  //점찍어라 
// import '.../index.css';

function Quiz01() {

  //let count = 0;
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => {
        //count = count + 2;
        //console.log(count);
        setCount(count + 2);
      }}>짝수출력</button>
      <span>{count}</span>
    </div>
  )
}

export default Quiz01

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// //import TempApp from './assets/TempApp.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     {/* <TempApp /> */}
//   </StrictMode>,
// )