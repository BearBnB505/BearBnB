import React, {useContext, useEffect, useState} from "react";
import '../lodgingDetail.css';
import DetailAmenityContext from "../Context/DetailAmenityContext";

function AmenityItem(img, title) {
    // let AmenityItemArr = [];
    // for(let i = 0; i<10; i++){
    //   AmenityItemArr.push(

    const comforts = useContext(DetailAmenityContext);
    return (
        <>
            {comforts.map((item) => (
                    <div className={'col-6 mb-3'}>
                        <div className={"float-start me-2"}><img className={'AmentityImg'} src={`/concept/${img}`} alt={'AmenityIcon'}></img></div>
                        <div className={"float-start"}>
                            {item.comfortId}
                        </div>
                    </div>
            ))}
        </>
    )

    //   )
    // }
    // return AmenityItemArr;
}

export default AmenityItem