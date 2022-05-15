import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Cart(props){
    const {cartItems, onAdd, onRemove} = props;

    const [cartItemsGlobal, setCartItemsGlobal] = useState(cartItems)

    useEffect(() => {
        setCartItemsGlobal(cartItems)
    }, [cartItems])

    // console.log(cartItems, "Cart Items hereee");

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemsPrice;
    return <div>
    <Card border="info" style={{ width: '18rem' }}>
       <Card.Header>Cart Details </Card.Header>
       <Card.Body>
        <hr></hr>
        <div>
        <Card.Text>
        {cartItemsGlobal.length === 0 && <div> Cart is Empty </div>}
            {cartItemsGlobal.filter(x => x.qty !== 0).map((item) => (
                <div key={item.id} className="rowr">
                    <div className="column-2">{item.name}</div>
                    <div className="column-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="column-2 text-right">
                        {item.qty} x ${item.price.toFixed(0)}
                    </div>
                </div>
            ))}
            {cartItemsGlobal.length !== 0 &&(
                <>
                    <hr></hr>
                    <div className="rowr">
                        <div className="column-2">Items Price</div>
                        <div className="column-1 text-right">${itemsPrice.toFixed(0)}</div>
                    </div>
                    <div className="rowr">
                        <div className="column-2">Total Price</div>
                        <div className="column-1 text-right"><strong>${totalPrice.toFixed(0)}</strong></div>
                    </div>
                </>
            )}
      </Card.Text>
          
        </div>
        </Card.Body>
        </Card>        
    </div>

}