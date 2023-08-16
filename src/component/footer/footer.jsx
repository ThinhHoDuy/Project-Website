import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <section className="contact">
                <h2>Contact us</h2>
                <p>
                    Liên hệ ngay với chúng tôi để tìm hiểu về các dòng sản phẩm điện thoại và laptop đa dạng,
                    từ tiện ích đến hiệu suất cao.Nhận tư vấn chọn lựa sản phẩm phù hợp với nhu cầu và mong muốn
                    của bạn.Được cung cấp thông tin chi tiết về cấu hình,tính năng, và giá cả.
                    Hỏi đáp về chính sách bảo hành, dịch vụ hậu mãi và chương trình khuyến mãi.
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

