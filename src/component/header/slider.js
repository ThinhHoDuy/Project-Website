import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const Slide = () => {
    return (
        <>
            <Carousel style={{ width: '100%' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://similux-vinovatheme.myshopify.com/cdn/shop/files/s-2-2_8f6f6c9c-4f6b-4587-874e-5781029eccef_2048x.jpg?v=1673401622"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://similux-vinovatheme.myshopify.com/cdn/shop/files/s-2-3_d27a89cf-e796-40e1-a475-53db59f897c5_2048x.jpg?v=1673401623"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://similux-vinovatheme.myshopify.com/cdn/shop/files/s-2-1_3b10ef68-da51-4320-9758-7f3d58ba0a15_2048x.jpg?v=1673401623"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
export default Slide;