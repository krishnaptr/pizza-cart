import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Pizza({ pizza, setShowModalTopping, onAdd }) {
  const handleAddChart = () => {
    const chart = onAdd(pizza)
    setShowModalTopping(chart)
  }

  return (
    <div>
      <Container>
      <Row>
        <Card style={{ width: '15rem' }} className="m-1">
        <Card.Img className='small' src={pizza.image} alt={pizza.name} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
          ${pizza.price}
          </Card.Text>
          <button onClick={() => handleAddChart()} className="order">Add to cart</button>
        </Card.Body>
      </Card>
      </Row>
      </Container>
    </div>
  )
}
