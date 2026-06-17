import React from 'react';

//import foods from "../data/foodsData";

import { Card, Button, Col } from "react-bootstrap";
// FoodCard.jsx 파일 상단에 추가
//import { Col, Card } from 'react-bootstrap';

//import food1 from '../img/food1.jpg';



function FoodCard({ food, foods, index }) {

    return (
        // <Col sm={2} md={4}>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            {/* <Card.Img variant="top" src={ import.meta.env.BASE_URL + '/images/food1.jpg'}/> */}
            {/* <Card.Img variant="top" src={ 'http://localhost:5173/' + food.imgPath}/> */}
            {/* 바로윗줄은 쓰려면, vite.config.js 파일에 써야됨??      base: /fdmarket */}
            <Card.Img variant="top" src={import.meta.env.BASE_URL + food.imgPath} />
            <Card.Body>
                {/* <Card.Title>카드 타이틀 div태그</Card.Title> */}
                <Card.Title>{foods[index].title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body >
        </Card >

    )

}

export default FoodCard;