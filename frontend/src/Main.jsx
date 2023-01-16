import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Main(props) {
    return (
        <div className={"container"}>
            <div style={{width: 200}}>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/c0dd551b-e328-4958-9209-9fa66ac47217.jpg?im_w=1200"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/03389803-26cf-4de3-bfc8-6dadeb41df40.jpg?im_w=1440"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/a8d45b2e-8bbe-4e05-85fb-36cbce7e79cc.jpg?im_w=1440"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={"text-start"}>
                    <span><b>주소, 한국</b></span><br/>
                    <span className={"text-muted"}>바다 전망</span><br/>
                    <span className={"text-muted"}>1월 24일~29일</span><br/>
                    <span><b>₩311,640</b> /박</span>
                </div>
            </div>
        </div>
    );
}

export default Main;