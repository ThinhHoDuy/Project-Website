import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
export const Editcrud = () => {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState({
        thumbnail: "",
        title: "",
        price: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        active: true,
    });
    useEffect(() => {
        fetch("http://localhost:8000/products/" + id)
            .then((res) => res.json())
            .then((resp) => {
                setCurrentProduct(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setCurrentProduct({
            ...currentProduct,
            category: e.target.value,
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { ...currentProduct };
        console.log(empdata)

        fetch("http://localhost:8000/products/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/admin');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className='login'>
                    <div className="login-container">
                        <h2>Create</h2>
                        <div className="input-container">
                        <label>Thumbnail</label>
                            <img
                                src={currentProduct.thumbnail}
                                alt="Thumbnail"
                                className="thumbnail-image"
                                style={{width:"60%",height:"50%"}}
                            />
                        </div>
                        <div className="input-container">
                            <label>Title</label>
                            <input value={currentProduct.title} onChange={e => setCurrentProduct({ ...currentProduct, title: e.target.value })} className="form-control"></input>
                        </div>
                        <div className="input-container">
                            <label>Price</label>
                            <input value={currentProduct.price} onChange={e => setCurrentProduct({ ...currentProduct, price: e.target.value })} ></input>
                        </div>
                        <div className="input-container">
                            <label>Rating</label>
                            <input value={currentProduct.rating} onChange={e => setCurrentProduct({ ...currentProduct, rating: e.target.value })} ></input>
                        </div>
                        <div className="input-container">
                            <label>Stock</label>
                            <input value={currentProduct.stock} onChange={e => setCurrentProduct({ ...currentProduct, stock: e.target.value })} ></input>
                        </div>
                        <div className="input-container">
                            <label>Brand</label>
                            <input value={currentProduct.brand} onChange={e => setCurrentProduct({ ...currentProduct, brand: e.target.value })} ></input>
                        </div>
                        <div className="input-container">
                            <label>Category</label>
                            <select id="country" name="country" className="form-control" value={currentProduct.category} onChange={handleCategoryChange}>
                                <option value="smartphones">smartphones</option>
                                <option value="laptops">laptops</option>
                                <option value="fragrances">fragrances</option>
                                <option value="skincare">skincare</option>
                                <option value="groceries">groceries</option>
                                <option value="home-decoration">home-decoration</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <input checked={currentProduct.active} onChange={e => setCurrentProduct({ ...currentProduct, active: e.target.checked })} type="checkbox" ></input>
                            <label >Is Active</label>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Save</button>
                            <Link to="/admin" className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}