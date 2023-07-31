import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "../cart/cartSlice";
import { getProducts,getProductSingle,getProductSingleStatus,getProductsStatus } from "./productSlice";
import { fetchAsyncProducts, fetchAsyncProductSingle } from "./productSlice";
import "./products.scss"
import { Link } from "react-router-dom";

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const productsStatus = useSelector(getProductsStatus)
    const [filteredProducts, setFilteredProducts] = useState(products);
    console.log(products);
    useEffect(() => {
        dispatch(fetchAsyncProducts());
    }, [dispatch]);

    if (productsStatus === 'loading') {
        return <h1 style={{ textAlign: 'center' }}>loading...</h1>
    }
    if (productsStatus === 'error') {
        return <h1 style={{ textAlign: 'center' }}>Lỗi rồi...</h1>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    }
    const filterProduct = (cat) => {
        if (cat === 'all') {
            setFilteredProducts(products);
        } else {
            const updatedList = products.filter((x) => x.category === cat);
            setFilteredProducts(updatedList);
        }
    }
    return (
        <>
            <div>
                <section className="categories">
                    <h2>Categories</h2>
                    <div className="category_btn">
                        <div id="buttons">
                            <button className="button-value" onClick={() => filterProduct('all')}>
                                All
                            </button>
                            <button className="button-value" onClick={() => filterProduct('smartphones')}>
                                smartphones
                            </button>
                            <button className="button-value" onClick={() => filterProduct('laptops')}>
                                laptops
                            </button>
                            <button className="button-value" onClick={() => filterProduct('fragrances')}>
                                fragrances
                            </button>
                            <button className="button-value" onClick={() => filterProduct('skincare')}>
                                skincare
                            </button>
                        </div>
                        <div id="search-container">
                            <input
                                type="search"
                                id="search-input"
                                placeholder="Search product name here.."
                            />
                            <button id="search">Search</button>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="row">
                        {filteredProducts && filteredProducts.map(product => (
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
                                        <Link style={{paddingLeft:"10px"}} to="">
                                            <Button variant="primary">Buy now</Button>
                                        </Link>
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






