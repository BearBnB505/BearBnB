import React, {useEffect, useState} from "react";
import axios from "axios";

function Test(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/test')
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("통신 오류");
            });
    }, []);

    return (
        <div>
            <h3>스프링 내부 리액트</h3>
            <button className={"btn btn-primary"}>테스트</button>
            <ul>{
                data.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }</ul>
        </div>
    );
}

export default Test;