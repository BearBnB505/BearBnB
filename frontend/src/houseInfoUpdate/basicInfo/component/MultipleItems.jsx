import React, { Component } from "react";
import Slider from "react-slick";


function MultipleItems (props){
    // console.log('캐러셀안에서')
    // console.log(props.data);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3

        };
        return (
            <div className={'container'} >
                <div className={'row'}>
                <Slider {...settings} style={{color:"black"}}>
                    {
                        props.data.map((item) => {
                            return (
                                    <div className={"container"}>
                                        <div>
                                        <img src={item.photo} style={{borderRadius:"10px", height:"180px"}}/>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </Slider>
            </div>
            </div>
        )
}

export default MultipleItems;

