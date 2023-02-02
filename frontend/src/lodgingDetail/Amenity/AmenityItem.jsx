import React, {useContext} from "react";
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
                <div className={'AmenityItem'}>
                    <img className={'AmentityImg'} src={`/concept/${img}`} alt={'AmenityIcon'}></img>
                    <div className={'AmenityTitle'}>{item.comfortId}</div>
                </div>
            ))}
        </>
    )

    //   )
    // }
    // return AmenityItemArr;
}

export default AmenityItem