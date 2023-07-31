// import React from "react";
// import "../footer/footer.scss"
// const Footer = () => {
//     return (
//         <div id="ft">
//             <div class="footer">
// <p>Mọi thắc mắc xin vui lòng liên hệ</p>
// <p>Email: hoduythinh@gmail.com</p>
// <p>Điện thoại: 0931929204</p>
// <p>&copy; 2023. All rights reserved.</p>
//             </div>
//         </div>
//     )
// }
// export default Footer;
import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="black-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/assets/logo.png" alt="Your Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/product">Sản phẩm</a></li>
                        <li><a href="/order">Dịch vụ</a></li>
                        <li><a href="/">Liên hệ</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="https://www.facebook.com/"><img src="/assets/facebook-icon.png" alt="Facebook" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src="/assets/twitter-icon.png" alt="Twitter" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src="/assets/instagram-icon.png" alt="Instagram" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Mọi thắc mắc xin vui lòng liên hệ</p>
                <p>Email: hoduythinh@gmail.com</p>
                <p>Điện thoại: 0931929204</p>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

