import React, {useEffect, useState} from "react";
import HostImg from "./Img/HostImg";
import HouseExplain from "./explain/HouseExplain";
import HostHouse from "./bedroom/HostHouse";
import LodgingDetailTitle from "./Title/LodgingDetailTitle";
import DetailAmenity from "./Amenity/DetailAmenity";
import HostIntroduce from "./host/HostIntroduce";
import ReviewAverage from "./review/ReviewAverage";
import Payment from "./payment/Payment";
import axios from "axios";
import {useParams} from "react-router";


function LodgingDetail(props) {

    const [data, setData] = useState([]);
    const {idx} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);


    return (
        <div style={{display: "grid", justifyContent: "center"}}>
                        <div className={'mx-auto'} style={{width: 1230}}>
                            <LodgingDetailTitle idx={data.idx} lodging_name={data.lodgingName} addr={data.addr}/>
                            <HostImg/>
                            {/*<div className={'DetailGridBox'}>*/}
                            <div className={'row'}>
                                <div className={'col-7 me-5'}>
                                    <HouseExplain introLodging={data.introLodging} />
                                    <HostHouse bedroomNum={data.bedroomNum} bedNum={data.bedNum} bathroomNum={data.bathroomNum}/>
                                    <DetailAmenity/>
                                </div>

                                {/*<div className={'MovePayment'}>*/}
                                <div className={'col ms-4 me-5 mt-5'}>
                                    <Payment cost={data.cost} />
                                </div>
                            </div>
                            <ReviewAverage />
                            <HostIntroduce/>
                        </div>

        </div>
    )
}

export default LodgingDetail;