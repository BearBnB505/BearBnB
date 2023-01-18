import React from "react";
import Img4 from "./component/Img4";
import '../HouseInfo.css'
// import '../slick-theme.css'
// import '../slick.css'
import SimpleSlider from "./component/Img4";



function HouseImgUpdate() {
  return (
    <div>
      <div className={'ImgUpLine1'}>사진</div>
      <a href={'#'}>수정</a>
      <SimpleSlider/>

    </div>
  )
}

export default HouseImgUpdate;
