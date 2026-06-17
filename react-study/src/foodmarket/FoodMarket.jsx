import React, { useState } from 'react';

import './FoodMarket.css';

// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';

// import {} from 'react-bootstrap';
import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import FoodCard from './components/FoodCard';       //// 17일 14시 22분.........


// import banner_bg from './img/banner_bg.jpg';
// import food1 from './img/food1.jpg';
// import food2 from './img/food2.jpg';
// import food3 from './img/food3.jpg';

// 화면에 보여주는  푸드 정보 기준 data import
import foodsData from './data/foodsData';

import { Routes, Route, Link, useNavigate } from 'react-router';    //// 17일 14시 03분....
import CustomerService from './pages/CustomerService';
import Home from './pages/Home';  // ← 추가

import Detail from './pages/Detail';


function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate();

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => { navigate("/") }}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/detail") }}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/info") }}>Info</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/help") }}>고객센터</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home foods={foods} />} />
                <Route path="/help" element={<CustomerService />} />

                <Route path="/detail/:id" element={<Detail foods={foods}/>} />

                <Route path="/detail" element={<div><h1>detail page</h1></div>} />
                <Route path="/info" element={<div><h1>info page</h1></div>} />
                <Route path="/*" element={<div><h1>잘못된 접근입니다.</h1></div>} />
            </Routes>
        </div>
    );
}

export default FoodMarket;





            {/* <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}




            {/* <img src={banner_bg} /> */}
            {/* <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')'}}></div> */}
            // <div className='main-bg'></div>

            
//                 bootstrap 한줄 기준 : 12 
//             */}
//             <Container>
//                 <Row>
//                     {
//                         foods.map(() => {
//                             <Col md={4} sm={2}>
//                                 <FoodCard />
//                             </Col>
//                         })
//                     }



//                     {
//                         foods.map((food, index) => {
//                             return (
//                                 <FoodCard
//                                     key={food.id}
//                                     food={food}
//                                     foods={foods}
//                                     index={index}
//                                 />
//                             );
//                         })
//                     }

//                 </Row>
//             </Container>


//         </div >
//     );
// }

// export default FoodMarket;