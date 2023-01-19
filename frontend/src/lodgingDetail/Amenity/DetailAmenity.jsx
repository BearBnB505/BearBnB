import React from "react";
import '../lodgingDetail.css';
import {Button} from "react-bootstrap";
import AmenityItem from "./AmenityItem";

function DetailAmenity(){
  return(
    <div>
      <hr style={{marginTop:80}}/>
      <div className={'AmenityLine'}>편의시설</div>
      <div className={'AmenityBox'}>
        {AmenityItem('B&B.jpg','따뜻한 아메리카노')}
      </div>
      <Button className={'AmenityBtn'} variant="dark">편의시설 모두보기</Button>
    </div>
  )
}

export default DetailAmenity;