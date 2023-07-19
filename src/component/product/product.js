// import React from "react";
// import './product.scss'

// const Product = () => {
//     return (
//         <>
//             <div>
//                 <div id="content">
//                     <div className="content-section">
//                         <h1 className="section-heading"> BEST SELLER </h1>
//                         <p className="section-sub-heading"> Giảm ngay 10% khi mua trên 2 sản phẩm </p>
//                         <div className="product-list">
//                             <div className="product-item">
//                                 <p className="product-name">Ten san pham</p>
//                                 <img src="https://preview.colorlib.com/theme/fashe/images/item-02.jpg.webp" alt="Ten san pham" className="product-img"></img>
//                                 <button className="product-button">Add to cart</button>
//                             </div>
//                             <div className="product-item">
//                                 <p className="product-name">Ten san pham</p>
//                                 <img src="https://preview.colorlib.com/theme/fashe/images/item-03.jpg.webp" alt="Ten san pham" className="product-img"></img>
//                                 <button className="product-button">Add to cart</button>
//                             </div>
//                             <div className="product-item">
//                                 <p className="product-name">Ten san pham</p>
//                                 <img src="https://preview.colorlib.com/theme/fashe/images/item-04.jpg.webp" alt="Ten san pham" className="product-img"></img>
//                                 <button className="product-button">Add to cart</button>
//                             </div>
//                             <div className="product-item">
//                                 <p className="product-name">Ten san pham</p>
//                                 <img src="https://preview.colorlib.com/theme/fashe/images/item-05.jpg.webp" alt="Ten san pham" className="product-img"></img>
//                                 <button className="product-button">Add to cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Product;

import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../cart/cartSlice";
import { getProducts } from "./productSlice";

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);
    console.log(products);
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === 'loading') {
        return <p>loading...</p>
    }
    if (status === 'error') {
        return <p>Lỗi rồi...</p>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }} >
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
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>

        </div>
    ))


    return (
        <>
            <h1 style={{textAlign: 'center'}}>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )

}
export default Product;