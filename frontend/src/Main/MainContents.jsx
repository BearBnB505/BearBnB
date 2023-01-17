import React, {useState, Component} from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

function MainContents(props) {
    // const { items } = props;
    // const [index, setIndex] = useState(0);
    //
    // const handleSelect = (selectedIndex, e) => {
    //     //React-bootstrap carousel has an indexing error that causes blank slides
    //     //(probably happens when you customize it).
    //     //You need to account for it in this callback...
    //     //adjust index to 0 if selectedIndex is greater than index of last slide or
    //     //it is less than zero
    //     //remember slide indexes are zero-based
    //     if (selectedIndex >= items.length || selectedIndex < 0 ){
    //         setIndex(0);
    //     } else if (selectedIndex !== index) {
    //         setIndex(selectedIndex);
    //     }
    // };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const keep = {
        width: 25,
        // opacity: .60
    };

    return (
        <div style={{width: 300}} className={"contents"} id={"main-contents"}>
            <div className={"position-relative"}>
                <div className={"position-absolute top-0 end-0 me-2 mt-2"} style={{zIndex: 1}}>
                    <a href="#" type={"button"}><img src="/img/btnKeep.png" alt="" style={keep}/></a>
                </div>
                <Slider {...settings}>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/c0dd551b-e328-4958-9209-9fa66ac47217.jpg?im_w=1200"
                            alt="First slide"
                            style={{height: 300}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/03389803-26cf-4de3-bfc8-6dadeb41df40.jpg?im_w=1440"
                            alt="Second slide"
                            style={{height: 300}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/a8d45b2e-8bbe-4e05-85fb-36cbce7e79cc.jpg?im_w=1440"
                            alt="Third slide"
                            style={{height: 300}}
                        />
                        <img src="" alt=""/>
                    </div>
                </Slider>
            </div>

            <div className={"text-start mt-2"}>
                <span><b>주소, 한국</b></span><br/>
                <span className={"text-muted"}>바다 전망</span><br/>
                <span className={"text-muted"}>1월 24일~29일</span><br/>
                <span><b>₩311,640</b> /박</span>
            </div>
        </div>
    );
}

export default MainContents;