import React, {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";
import Main from "./components/Main";
import Cart from "./components/Cart";
import extra from "./extra";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Topping from "./components/Topping.js";
import { Card } from "react-bootstrap";
const App = () => {
  const { toppings } = extra;
  const { pizzas } = data;
  const [cartItems, setCartItems] = useState([]);
  const [openToppings, setOpenToppings] = useState(false);

  const onAdd = (pizza) => {
    const exist = cartItems.find((x) => (x.name === `${pizza.name} + Original`) || (x.name === pizza.name));
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          (x.name === `${pizza.name} + Original`) || (x.name === pizza.name)
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
      return exist;
    } else {
      const id = cartItems.length + 1;
      const newCart = {
        ...pizza,
        chartId: id,
        qty: 1,
        extra: toppings[3],
        name: `${pizza.name} ${toppings[3].name}`,
        pizzaName: pizza.name,
      };

      setCartItems([...cartItems, newCart]);
      return newCart;
    }
  };

  const handleChangeTopping = (selectedToppings, cartData) => {
    const getChartGlobalId = cartItems.findIndex(
      (chart) => chart.name === cartData.name
    );

    if (cartItems[getChartGlobalId].extra.name === selectedToppings.name) {
      cartItems[getChartGlobalId] = {
        ...cartData,
        qty: cartData.qty + 0
      };
      setCartItems(cartItems);
    } else {
      cartItems[getChartGlobalId] = {
        ...cartItems[getChartGlobalId],
        qty: cartItems[getChartGlobalId].qty - 1,
      };

      const exist = cartItems.find(
        (x) =>
          x.name ===
          `${cartItems[getChartGlobalId].pizzaName} + ${selectedToppings.name}`
      );

      if (exist) {
        const existIndex = cartItems.findIndex(
          (x) => x.chartId === exist.chartId
        );

        cartItems[existIndex] = {
          ...cartItems[existIndex],
          qty: cartItems[existIndex].qty + 1,
        };
      } else {
        const id = cartItems.length + 1;
        const newCart = {
          ...cartData,
          chartId: id,
          qty: 1,
          name: `${cartData.pizzaName} + ${selectedToppings.name}`,
          price: cartData.price + selectedToppings.price
        };

        setCartItems([...cartItems, newCart]);
      }
    }
  };

  const onRemove = (pizza) => {
    const exist = cartItems.find((x) => x.chartId === pizza.chartId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.chartId !== pizza.chartId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.chartId === pizza.chartId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
         <Header countCartItems={cartItems.filter(x => x.qty !== 0).length}></Header>
        <Hero/>
        <Container>
      <div className="row">
      <Col lg={true}>
        <Main setOpenToppings={setOpenToppings} carts={cartItems} onAdd={onAdd} pizzas={pizzas} setCartsList={setCartItems} toppings={toppings}>
        </Main>
        </Col>
        <Col xs lg="3">
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart></Col>
        <Topping show={openToppings} carts={cartItems} setShow={setOpenToppings} toppings={toppings}
        changeTopping={(selectedToppings, chartData) => handleChangeTopping(selectedToppings, chartData)} setCarts={setCartItems}>  
        </Topping>
        
      </div>
      </Container>
    </div>
  );
}

export default App;
