import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <section className="contact">
                <h2>Contact us</h2>
                <p>
                    Functional handbags made of luxurious materials to improve people's
                    lives in small but mighty ways. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Est dolorem cum corporis impedit quae praesentium
                    nulla atque ut, reprehenderit qui mollitia, facilis voluptates
                    cupiditate nam fuga, quis fugit voluptatum labore.
                </p>

                <div id="contact-container">
                    <input
                        type="email"
                        id="email-input"
                        placeholder="Enter your email address.."
                    />
                    <button id="email">Submit</button>
                </div>
            </section>
            
            <hr />
            <footer>
                <div>
                    <h5>Quick links</h5>
                    <a href="#/"><p>Bags</p></a>
                    <a href="#/"><p>Shoes</p></a>
                    <a href="#/"><p>Lookbook</p></a>
                </div>
                <div>
                    <h5>Info</h5>
                    <a href="#/"><p>About</p></a>
                    <a href="#/"><p>Contact us</p></a>
                    <a href="#/"><p>Shipping policy</p></a>
                    <a href="#/"><p>Blog</p></a>
                </div>
                <div>
                    <h5>Our mission</h5>
                    <p>
                        Quality materials, good designs, craftsmanship and sustainability.
                    </p>
                    <div>
                        <i class="bx bxl-facebook-square"></i>
                        <i class="bx bxl-instagram"></i>
                        <i class="bx bxl-youtube"></i>
                        <i class="bx bxl-tiktok"></i>
                        <i class="bx bxl-twitter"></i>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

