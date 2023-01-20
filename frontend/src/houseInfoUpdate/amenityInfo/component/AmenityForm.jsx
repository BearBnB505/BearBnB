import React, {useState} from "react";
import {ToggleButton} from "react-bootstrap";
import AmenityCheck from "./AmenityCheck";
import $ from "jquery";

const AmenityForm=(props)=>{

  const [bathtubChecked, setBathtubChecked] = useState(false);
  const [showerChecked, setShowerChecked] = useState(false);
  const [towerChecked, setTowerChecked] = useState(false);
  const [soapChecked, setSoapChecked] = useState(false);
  const [tissueChecked, setTissueChecked] = useState(false);
  const [hairdryerChecked, setHairdryerChecked] = useState(false);
  const [shampooChecked, setShampooChecked] = useState(false);
  const [washerChecked, setWasherChecked] = useState(false);
  const [dryerChecked, setDryerChecked] = useState(false);
  const [cleaningSuppliesChecked, setCleaningSuppliesChecked] = useState(false);


  return(
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'} style={{fontSize:17}}>항목</p>
        <button className={'BasicInfoBtn2'} id={'AddFormBtn1'} onClick={() => {
          props.setAddIntro(false)
        }}>&#88;</button>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'}>욕실</div>

        <div className={'AmenityTitle'}>욕조</div>

        <ToggleButton
          id="toggle-check1"
          type="checkbox"
          variant="outline-dark"
          checked={bathtubChecked}
          onChange={(e) => setBathtubChecked(e.currentTarget.checked)}
          onClick={props.setBathtub(!props.bathtub)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>




        <div className={'AmenityTitle'}>샤워기</div>
        <ToggleButton
          id="toggle-check2"
          type="checkbox"
          variant="outline-dark"
          checked={showerChecked}
          onChange={(e) => setShowerChecked(e.currentTarget.checked)}
          onClick={props.setShower(!props.shower)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>수건</div>
        <ToggleButton
          id="toggle-check3"
          type="checkbox"
          variant="outline-dark"
          checked={towerChecked}
          value="1"
          onChange={(e) => setTowerChecked(e.currentTarget.checked)}
          onClick={props.setTower(!props.tower)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>비누</div>
        <ToggleButton
          id="toggle-check4"
          type="checkbox"
          variant="outline-dark"
          checked={soapChecked}
          value="1"
          onChange={(e) => setSoapChecked(e.currentTarget.checked)}
          onClick={props.setSoap(!props.soap)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>화장지</div>
        <ToggleButton
          id="toggle-check5"
          type="checkbox"
          variant="outline-dark"
          checked={tissueChecked}
          value="1"
          onChange={(e) => setTissueChecked(e.currentTarget.checked)}
          onClick={props.setTissue(!props.tissue)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>



        <div className={'AmenityTitle'}>헤어드라이어</div>
        <ToggleButton
          id="toggle-check6"
          type="checkbox"
          variant="outline-dark"
          checked={hairdryerChecked}
          value="1"
          onChange={(e) => setHairdryerChecked(e.currentTarget.checked)}
          onClick={props.setHairdryer(!props.hairdryer)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>샴푸</div>
        <ToggleButton
          id="toggle-check7"
          type="checkbox"
          variant="outline-dark"
          checked={shampooChecked}
          value="1"
          onChange={(e) => setShampooChecked(e.currentTarget.checked)}
          onClick={props.setShampoo(!props.shampoo)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>세탁기</div>
        <ToggleButton
          id="toggle-check8"
          type="checkbox"
          variant="outline-dark"
          checked={washerChecked}
          value="1"
          onChange={(e) => setWasherChecked(e.currentTarget.checked)}
          onClick={props.setWasher(!props.washer)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>건조기</div>
        <ToggleButton
          id="toggle-check9"
          type="checkbox"
          variant="outline-dark"
          checked={dryerChecked}
          value="1"
          onChange={(e) => setDryerChecked(e.currentTarget.checked)}
          onClick={props.setDryer(!props.dryer)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>청소용품</div>
        <ToggleButton
          id="toggle-check10"
          type="checkbox"
          variant="outline-dark"
          checked={cleaningSuppliesChecked}
          value="1"
          onChange={(e) => setCleaningSuppliesChecked(e.currentTarget.checked)}
          onClick={props.setCleaningSupplies(!props.cleaningSupplies)}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>



      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >침실</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >냉난방</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >인터넷 및 엔터테인</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >주방</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >주차</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >안전시설</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >기타 서비스</div>
        <div>1</div>
        <div>2</div>
      </div>



    </div>
  )
}

export default AmenityForm;