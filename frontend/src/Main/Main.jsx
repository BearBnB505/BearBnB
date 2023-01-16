import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import MainContents from "./MainContents";

function Main(props) {
    return (
        <div className={"container mt-5"}>
            <MainContents />
        </div>
    );
}

export default Main;