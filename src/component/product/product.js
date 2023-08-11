import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "../cart/cartSlice";
import { getProducts, getProductsStatus } from "./productSlice";
import { fetchAsyncProducts } from "./productSlice";
import "./products.scss"
import { Link } from "react-router-dom";

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const productsStatus = useSelector(getProductsStatus)
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [search, setSearch] = useState("")
    console.log(products);
    useEffect(() => {
        dispatch(fetchAsyncProducts());
    }, [dispatch]);
    useEffect(() => {
        const filtered = products.filter((product) => {
            if (search === "") {
                return true;
            }
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredProducts(filtered);
    }, [search, products]);

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
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button id="search">Search</button>
                        </div>
                    </div>
                </section>
                <div className="products-cart">
                    {filteredProducts && filteredProducts.map(product => (
                        <div key={product.id} id="products">
                            <div className="card">
                                <div className="image-container">
                                    <Link to={`/product/${product.id}`} >
                                        <img src={product.images[0]} alt="" />
                                    </Link>
                                </div>
                                <div><i className="bx bx-heart" id="heart-icon"></i></div>
                                <div className="container">
                                    <div>
                                        <div>
                                            <h5 className="product-name">{product.title}</h5>
                                        </div>
                                        <div>
                                            <h6>{product.price}</h6>
                                        </div>
                                    </div>
                                    <div className="btn-cart">
                                        <button className="cart-btn" onClick={() => addToCart(product)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}



export default Product;






