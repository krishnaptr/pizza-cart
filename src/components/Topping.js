import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function Topping({ show, setShow, toppings, changeTopping, carts }) {
  // const { topping } = props;
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [chartData, setChartData] = useState()
  const [selectedgetToppings, setSelectedToppings] = useState()

  useEffect(() => {
    setChartData(show)
  }, [show])

  const handleChangeExtra = (e) => {
    const id = e.target.value
    const getToopingIndex = toppings.findIndex((topping) => topping.id === id)

    const selectedToppings = toppings[getToopingIndex]
    setChartData({...chartData, extra: selectedToppings})
    setSelectedToppings(selectedToppings)
    
    // const getChartGlobalId = carts.findIndex((chart) => chart.id === chartData.id)
    // carts[getChartGlobalId] = {...chartData, extra: selectedToppings}
    // setCarts(carts)

    // changeTopping(selectedToppings, chartData)
  }

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow())}>
        Add to cart
      </Button> */}
      <Modal show={!!show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Extra Toppings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-check">
              {toppings.map((topping) => {
                return (
                  <div key={topping.id} class="form-check form-check-inline">
                    <input onChange={handleChangeExtra} checked={chartData?.extra?.name === topping.name} class="form-check-input"  type="radio" name="toppings" value={topping.id} />
                    <label class="form-check-label" for="inlineCheckbox1">{topping.name} (${topping.price})</label>
                  </div>
                );
              })}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
      
          <Button className="order" onClick={() => {
            setShow(false)
            changeTopping(selectedgetToppings, chartData)
            setChartData()
            setSelectedToppings()
          }
          }>
            Add toppings
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
