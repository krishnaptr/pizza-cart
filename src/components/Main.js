import React from "react";
import Pizza from "./Pizza";
import { Col } from "react-bootstrap";

export default function Main({ pizzas, onAdd, setOpenToppings }) {
    // const [openToppings, setOpenToppings] = useState(false)
 
    return (
    <main>
        <h2 style={{ marginLeft: '5px' }}>Pizzas List</h2>
        <hr></hr>
        <div className="d-flex flex-wrap">
           {pizzas.map((pizza) => (
               <Pizza setShowModalTopping={setOpenToppings} key={pizza.id} pizza={pizza} onAdd={onAdd}></Pizza>
           ))}
           {/* {toppings.map((topping) => (
               <Topping key={topping.id} topping={topping}></Topping>
           ))} */}
           {/* <Topping show={openToppings} carts={carts} setShow={setOpenToppings} toppings={toppings} setCarts={setCartsList}></Topping> */}
        </div>
    </main>
    );
}