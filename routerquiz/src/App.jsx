import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RouterQuiz from './RouterQuiz'
import Info from './Info'
import { Routes, Route, useNavigate, Link } from 'react-router'

function App() {

  return (
    <>
      <div>
        <div>
          {/* 1. 원래 있던 버튼들에 <Link>만 감싸주었습니다. */}
          <button><Link to="/">Main</Link></button>
          <button><Link to="/info">/info</Link></button>
          <button><Link to="/mypage">/mypage</Link></button>
          <button><Link to="/cart">/cart</Link></button>
        </div>

        {/* 2. <Routes> 내부에 원래 있던 메인 경로 외에 퀴즈 경로 3개만 추가했습니다. */}
        <Routes>
          <Route path="/" element={<div>main 공간</div>} />
          <Route path="/info" element={<Info />} />
          <Route path="/mypage" element={<div>mypage 공간입니다.</div>} />
          <Route path="/cart" element={<div>cart 공간입니다.</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import RouterQuiz from './RouterQuiz'
// import Info from './Info'
// import { Routes, Route, useNavigate, Link } from 'react-router'

// function App() {

//   return (
//     <>
//       <div>
//         <div>
//           {/* <button><Link to="/">Main</Link></button> */}
//           <button>/info</button>
//           <button>/mypage</button>
//           <button>/cart</button>
//         </div>

//         <Routes>
//           <Route path="/" element={<div>main 공간</div>} />
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App
