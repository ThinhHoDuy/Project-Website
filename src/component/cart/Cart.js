import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { remove } from "./cartSlice";

const Cart = () => {
    const products = useSelector(state => state.cart)
    console.log(products)
    const dispatch = useDispatch();
    const removeToCart = (id) => {
        dispatch(remove(id));
    }
    const cards = products.map(product => (
        <div className="col-md-12" style={{ marginBottom: '10px' }} >
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                     <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove</Button>
                </Card.Footer>
            </Card>

        </div>
    ))

    return (
        <>
            <div style={{ paddingTop: '45px' }} className="row">
                <h2 style={{textAlign: 'center'}}>Giỏ hàng</h2>
                {cards}
            </div>
            
        </>
    )

}
export default Cart;