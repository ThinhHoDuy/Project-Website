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
    }, [dispatch]);

    if (status === 'loading') {
        return <h1 style={{ textAlign: 'center' }}>loading...</h1>
    }
    if (status === 'error') {
        return <h1 style={{ textAlign: 'center' }}>Lỗi rồi...</h1>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    }
    return (
        <>
            <div>
                <div></div>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Product Dashboard</h1>
                    <div className="row">
                        {products.map(product => (
                            <div className="col-md-3" style={{ marginBottom: '10px' }} >
                                <Card key={product.id} className="h-100">
                                    <div className="text-center">
                                        <Card.Img variant="top" src={product.images[0]} style={{ width: '100px', height: '130px' }} />
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Product;






/* <div>
                {products.map(product => (
                    <div id="content">
                        <div className="content-section">
                            <div>
                                <div className="before"></div>
                                <h1 className="section-heading"> BEST SELLER </h1>
                                <div className="after"></div>
                            </div>
                            <p className="section-sub-heading"> Giảm ngay 10% khi mua trên 2 sản phẩm </p>
                            <div className="product-list">
                                <div className="product-item">
                                    <img className="product-img" src={product.images[0]} />
                                    <p className="product-name">{product.title}</p>
                                    <button className="product-button" variant="primary" onClick={() => addToCart(product)}>Add to cart</button>
                                </div>
                                <div className="product-item">
                                    <img className="product-img" src={product.images[1]} />
                                    <p className="product-name">{product.title}</p>
                                    <button className="product-button" variant="primary" onClick={() => addToCart(product)}>Add to cart</button>
                                </div>
                                <div className="product-item">
                                    <img className="product-img" src={product.images[2]} />
                                    <p className="product-name">{product.title}</p>
                                    <button className="product-button" variant="primary" onClick={() => addToCart(product)}>Add to cart</button>
                                </div>
                                <div className="product-item">
                                    <img className="product-img" src={product.images[3]} />
                                    <p className="product-name">{product.title}</p>
                                    <button className="product-button" variant="primary" onClick={() => addToCart(product)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */