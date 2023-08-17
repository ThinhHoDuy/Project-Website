    import React from "react";
    import { useState } from "react";
    import { Link,useNavigate } from "react-router-dom";
    import "./login.scss"
    export const Addcrud = () => {
        const [thumbnail, setThumbnail] = useState("")
        const [title, setTitle] = useState("")
        const [price, setPrice] = useState("")
        const [rating, setRating] = useState("")
        const [stock, setStock] = useState("")
        const [brand, setBrand] = useState("")
        const [category, setCategory] = useState("")
        const [active, activechange] = useState(true);

        const navigate = useNavigate();
        
        const handleCategoryChange = (e) => {
            setCategory(e.target.value);
        };

        const handlesubmit = (e) => {
            e.preventDefault();
            const empdata = { title, price, rating, stock, brand, category, active };
            console.log(empdata)


            fetch("http://localhost:8000/products", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((res) => {
                alert('Saved successfully.')
                navigate("/admin")
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
                                <input value={thumbnail} type="file" onChange={e => setThumbnail(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="input-container">
                                <label>Title</label>
                                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="input-container">
                                <label>Price</label>
                                <input value={price} onChange={e => setPrice(e.target.value)} ></input>
                            </div>
                            <div className="input-container">
                                <label>Rating</label>
                                <input value={rating} onChange={e => setRating(e.target.value)} ></input>
                            </div>
                            <div className="input-container">
                                <label>Stock</label>
                                <input value={stock} onChange={e => setStock(e.target.value)} ></input>
                            </div>
                            <div className="input-container">
                                <label>Brand</label>
                                <input value={brand} onChange={e => setBrand(e.target.value)} ></input>
                            </div>
                            <div className="input-container">
                                <label>Category</label>
                                <select id="country" name="country" className="form-control" value={category} onChange={handleCategoryChange}>
                                    <option value="smartphones">smartphones</option>
                                    <option value="laptops">laptops</option>
                                    <option value="fragrances">fragrances</option>
                                    <option value="skincare">skincare</option>
                                    <option value="groceries">groceries</option>
                                    <option value="home-decoration">home-decoration</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" ></input>
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
