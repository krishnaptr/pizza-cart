import React from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import pizzaImg from "../images/pizza-hero.png";
import { Button } from "react-bootstrap";

const Hero = () => {
    return (
        <div className='mt-5 d-flex hero-section'>
            <Container>
            <Row className='align-items-center'>
                <Col lg={true}>
                <div className='hero-text'>
                    <div className='slogan'>
                    <p className='slogan-text'>More than ordinary pizza</p>
                    </div>
                    <h1>Special pizza every time</h1>
                    <h1>for you and fastest</h1>
                    <h1>delivery.</h1>
                    <p>Hey! Our delicious pizza is waiting for you we are always near to you with fresh item of pizza.</p>
                    <Button className='order'>Order Now!</Button>
                </div>
                </Col>
                <Col lg={true}>
                <div className="d-flex justify-content-end">
                <img src={pizzaImg} heigth="500" width="500" alt='Pizza' className="pizza-hero"></img>
                </div>
                    
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Hero;