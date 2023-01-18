import React, {useState} from "react";
import HouseIntroForm from "../../basicInfo/component/HouseIntroForm";
import AddForm from "./AddForm";

const Add = () => {
  const [addIntro, setAddIntro] = useState(false);


  return(
    <div>
      <div className={'HNameFrame3'}>
        <p className={'HNameLine1'}>주소</p>
        <button className={'BasicInfoBtn'} onClick={() => {
          setAddIntro(!addIntro)
        }}>{addIntro ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>82 Yeongseondong 2(i)-ga, Yeongdo-gu, Busan, South Korea</p>
      </div>
      {addIntro && <AddForm setAddIntro={setAddIntro}/>}
      <hr/>
    </div>
  )
}

export default Add;