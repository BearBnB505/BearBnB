import React, {useEffect, useState} from "react";
import {Button, ToggleButton} from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

const AmenityForm = (props) => {

  //욕실
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

  //침실
  const [bedChecked, setBedChecked] = useState(false);
  const [bedSheetChecked, setBedSheetChecked] = useState(false);
  const [beddingChecked, setBeddingChecked] = useState(false);

  //냉난방기
  const [airConChecked, setAirConChecked] = useState(false);
  const [heaterChecked, setHeaterChecked] = useState(false);

  //인터넷 및 엔터
  const [internetChecked, setInternetChecked] = useState(false);
  const [tvChecked, setTVChecked] = useState(false);

  // 주방
  const [refrigeratorChecked, setRefrigeratorChecked] = useState(false);
  const [microwaveChecked, setMicrowaveChecked] = useState(false);
  const [gasStoveChecked, setGasStoveChecked] = useState(false);
  const [dinnerwareChecked, setDinnerwareChecked] = useState(false);

  //주차
  const [feeParkingChecked, setFeeParkingChecked] = useState(false);
  const [freeParkingChecked, setFreeParkingChecked] = useState(false);

  //안전시설
  const [cctvChecked, setCCTVChecked] = useState(false);
  const [fireAlarmChecked, setFireAlarmChecked] = useState(false);
  const [coAlarmChecked, setCOAlarmChecked] = useState(false);
  const [fireExtinguisherChecked, setFireExtinguisherChecked] = useState(false);
  const [firstAidKitChecked, setFirstAidKitChecked] = useState(false);

  //기타 서비스
  const [longTermChecked, setLongTermChecked] = useState(false);
  const [petChecked, setPetChecked] = useState(false);
  const [guestOnlyDoorChecked, setGuestOnlyDoorChecked] = useState(false);
  const [barbecueChecked, setBarbecueChecked] = useState(false);
  const [poolChecked, setPoolChecked] = useState(false);
  const [breakfastChecked, setBreakfastChecked] = useState(false);

  const [data, setData] = useState([]);

  $(document).ready(function () {
    //욕실
    {
      $('#BathroomCheck1').on('click', function () {
        {
          props.setBathtub(!props.bathtub)
        }
        {
          setBathtubChecked(!bathtubChecked)
        }
      });
      $('#BathroomCheck2').on('click', function () {
        {
          props.setShower(!props.shower)
        }
        {
          setShowerChecked(!showerChecked)
        }
      });
      $('#BathroomCheck3').on('click', function () {
        {
          props.setTower(!props.tower)
        }
        {
          setTowerChecked(!towerChecked)
        }
      });
      $('#BathroomCheck4').on('click', function () {
        {
          props.setSoap(!props.soap)
        }
        {
          setSoapChecked(!soapChecked)
        }
      });
      $('#BathroomCheck5').on('click', function () {
        {
          props.setTissue(!props.tissue)
        }
        {
          setTissueChecked(!tissueChecked)
        }
      });
      $('#BathroomCheck6').on('click', function () {
        {
          props.setHairdryer(!props.hairdryer)
        }
        {
          setHairdryerChecked(!hairdryerChecked)
        }
      });
      $('#BathroomCheck7').on('click', function () {
        {
          props.setShampoo(!props.shampoo)
        }
        {
          setShampooChecked(!shampooChecked)
        }
      });
      $('#BathroomCheck8').on('click', function () {
        {
          props.setWasher(!props.washer)
        }
        {
          setWasherChecked(!washerChecked)
        }
      });
      $('#BathroomCheck9').on('click', function () {
        {
          props.setDryer(!props.dryer)
        }
        {
          setDryerChecked(!dryerChecked)
        }
      });
      $('#BathroomCheck10').on('click', function () {
        {
          props.setCleaningSupplies(!props.cleaningSupplies)
        }
        {
          setCleaningSuppliesChecked(!cleaningSuppliesChecked)
        }
      });
    }
    //침실
    {
      $('#BedroomCheck1').on('click', function () {
        {
          props.setBed(!props.bed)
        }
        {
          setBedChecked(!bedChecked)
        }
      });

      $('#BedroomCheck2').on('click', function () {
        {
          props.setBedSheet(!props.bedSheet)
        }
        {
          setBedSheetChecked(!bedSheetChecked)
        }
      });


      $('#BedroomCheck3').on('click', function () {
        {
          props.setBedding(!props.bedding)
        }
        {
          setBeddingChecked(!beddingChecked)
        }
      });
    }
    //  냉난방기
    {
      $('#AirConditionerCheck1').on('click', function () {
        {
          props.setAirCon(!props.airCon)
        }
        {
          setAirConChecked(!airConChecked)
        }
      });

      $('#AirConditionerCheck2').on('click', function () {
        {
          props.setHeater(!props.heater)
        }
        {
          setHeaterChecked(!heaterChecked)
        }
      });
    }
    //  인터넷 및 엔터
    {
      $('#EntCheck1').on('click', function () {
        {
          props.setInternet(!props.internet)
        }
        {
          setInternetChecked(!internetChecked)
        }
      });

      $('#EntCheck2').on('click', function () {
        {
          props.setTv(!props.tv)
        }
        {
          setTVChecked(!tvChecked)
        }
      });
    }
    //  주방
    {
      $('#kitchen1').on('click', function () {
        {
          props.setRefrigerator(!props.refrigerator)
        }
        {
          setRefrigeratorChecked(!refrigeratorChecked)
        }
      });
      $('#kitchen2').on('click', function () {
        {
          props.setMicrowave(!props.microwave)
        }
        {
          setMicrowaveChecked(!microwaveChecked)
        }
      });
      $('#kitchen3').on('click', function () {
        {
          props.setGasStove(!props.gasStove)
        }
        {
          setGasStoveChecked(!gasStoveChecked)
        }
      });
      $('#kitchen4').on('click', function () {
        {
          props.setDinnerware(!props.dinnerware)
        }
        {
          setDinnerwareChecked(!dinnerwareChecked)
        }
      });
    }
    //  주차
    {
      $('#parkingLot1').on('click', function () {
        {
          props.setFeeParking(!props.feeParking)
        }
        {
          setFeeParkingChecked(!feeParkingChecked)
        }
      });

      $('#parkingLot2').on('click', function () {
        {
          props.setFreeParking(!props.freeParking)
        }
        {
          setFreeParkingChecked(!freeParkingChecked)
        }
      });
    }
    //  안전시설
    {
      $('#SafetyFacility1').on('click', function () {
        {
          props.setCCTV(!props.cctv)
        }
        {
          setCCTVChecked(!cctvChecked)
        }
      });

      $('#SafetyFacility2').on('click', function () {
        {
          props.setFireAlarm(!props.fireAlarm)
        }
        {
          setFireAlarmChecked(!fireAlarmChecked)
        }
      });
      $('#SafetyFacility3').on('click', function () {
        {
          props.setCOAlarm(!props.coAlarm)
        }
        {
          setCOAlarmChecked(!coAlarmChecked)
        }
      });

      $('#SafetyFacility4').on('click', function () {
        {
          props.setFireExtinguisher(!props.fireExtinguisher)
        }
        {
          setFireExtinguisherChecked(!fireExtinguisherChecked)
        }
      });

      $('#SafetyFacility5').on('click', function () {
        {
          props.setFirstAidKit(!props.firstAidKit)
        }
        {
          setFirstAidKitChecked(!firstAidKitChecked)
        }
      });

    }
    //  기타서비스
    {
      $('#EctService1').on('click', function () {
        {
          props.setLongTerm(!props.longTerm)
        }
        {
          setLongTermChecked(!longTermChecked)
        }
      });

      $('#EctService2').on('click', function () {
        {
          props.setPet(!props.pet)
        }
        {
          setPetChecked(!petChecked)
        }
      });
      $('#EctService3').on('click', function () {
        {
          props.setGuestOnlyDoor(!props.guestOnlyDoor)
        }
        {
          setGuestOnlyDoorChecked(!guestOnlyDoorChecked)
        }
      });

      $('#EctService4').on('click', function () {
        {
          props.setBarbecue(!props.barbecue)
        }
        {
          setBarbecueChecked(!barbecueChecked)
        }
      });

      $('#EctService5').on('click', function () {
        {
          props.setPool(!props.pool)
        }
        {
          setPoolChecked(!poolChecked)
        }
      });

      $('#EctService6').on('click', function () {
        {
          props.setBreakfast(!props.breakfast)
        }
        {
          setBreakfastChecked(!breakfastChecked)
        }
      });
    }
  });


  useEffect(() => {
    axios.get('http://localhost:8080/comfortList')
      .then((req) => {
        const {data} = req;
        setData(data);
        data[0].usableYn === 'N' ? setBathtubChecked(false) : setBathtubChecked(true)
        data[1].usableYn === 'N' ? setShowerChecked(false) : setShowerChecked(true)
        data[2].usableYn === 'N' ? setTowerChecked(false) : setTowerChecked(true)
        data[3].usableYn === 'N' ? setSoapChecked(false) : setSoapChecked(true)
        data[4].usableYn === 'N' ? setTissueChecked(false) : setTissueChecked(true)
        data[5].usableYn === 'N' ? setHairdryerChecked(false) : setHairdryerChecked(true)
        data[6].usableYn === 'N' ? setShampooChecked(false) : setShampooChecked(true)
        data[7].usableYn === 'N' ? setDryerChecked(false) : setDryerChecked(true)
        data[8].usableYn === 'N' ? setCleaningSuppliesChecked(false) : setCleaningSuppliesChecked(true)
        data[9].usableYn === 'N' ? setBedChecked(false) : setBedChecked(true)
        data[10].usableYn === 'N' ? setBedSheetChecked(false) : setBedSheetChecked(true)
        data[11].usableYn === 'N' ? setBeddingChecked(false) : setBeddingChecked(true)
        data[12].usableYn === 'N' ? setAirConChecked(false) : setAirConChecked(true)
        data[13].usableYn === 'N' ? setHeaterChecked(false) : setHeaterChecked(true)
        data[14].usableYn === 'N' ? setInternetChecked(false) : setInternetChecked(true)
        data[15].usableYn === 'N' ? setTVChecked(false) : setTVChecked(true)
        data[16].usableYn === 'N' ? setRefrigeratorChecked(false) : setRefrigeratorChecked(true)
        data[17].usableYn === 'N' ? setMicrowaveChecked(false) : setMicrowaveChecked(true)
        data[18].usableYn === 'N' ? setGasStoveChecked(false) : setGasStoveChecked(true)
        data[19].usableYn === 'N' ? setDinnerwareChecked(false) : setDinnerwareChecked(true)
        data[20].usableYn === 'N' ? setFeeParkingChecked(false) : setFeeParkingChecked(true)
        data[21].usableYn === 'N' ? setFreeParkingChecked(false) : setFreeParkingChecked(true)
        data[22].usableYn === 'N' ? setCCTVChecked(false) : setCCTVChecked(true)
        data[23].usableYn === 'N' ? setFireAlarmChecked(false) : setFireAlarmChecked(true)
        data[24].usableYn === 'N' ? setCOAlarmChecked(false) : setCOAlarmChecked(true)
        data[25].usableYn === 'N' ? setFireExtinguisherChecked(false) : setFireExtinguisherChecked(true)
        data[26].usableYn === 'N' ? setFirstAidKitChecked(false) : setFirstAidKitChecked(true)
        data[27].usableYn === 'N' ? setLongTermChecked(false) : setLongTermChecked(true)
        data[28].usableYn === 'N' ? setPetChecked(false) : setPetChecked(true)
        data[29].usableYn === 'N' ? setGuestOnlyDoorChecked(false) : setGuestOnlyDoorChecked(true)
        data[30].usableYn === 'N' ? setBarbecueChecked(false) : setBarbecueChecked(true)
        data[31].usableYn === 'N' ? setPoolChecked(false) : setPoolChecked(true)
        data[32].usableYn === 'N' ? setBreakfastChecked(false) : setBreakfastChecked(true)
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);




  const SetHouseIntro=()=>{
    const test = [
      {lodgingNum : data[0].lodgingNum, comfortId : data[0].comfortId, usableYn : props.bathtub},
      {lodgingNum : data[1].lodgingNum, comfortId : data[1].comfortId, usableYn : props.shower},
      {lodgingNum : data[2].lodgingNum, comfortId : data[2].comfortId, usableYn : props.tower}
    ]
    const test2 = JSON.stringify(test);
    console.log(`json 문자열 : ${test2}`);


    axios.post('http://localhost:8080/UpdateComfortsList', test, null)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }





  return (
    <div>
      <div className={'HNameFrame1'} style={{marginTop: 60}}>
        <p className={'HNameLine1'} style={{fontSize: 20}}>항목</p>
        <button className={'BasicInfoBtn2'} id={'AddFormBtn1'} onClick={() => {
          props.setAmenity(false)
        }}>&#88;</button>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'}>욕실</div>

        <div className={'AmenityTitle'}>욕조</div>
        <ToggleButton
          id="BathroomCheck1"
          type="checkbox"
          variant="outline-dark"
          checked={bathtubChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>샤워기</div>
        <ToggleButton
          id="BathroomCheck2"
          type="checkbox"
          variant="outline-dark"
          value='1'
          checked={showerChecked}
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>수건</div>
        <ToggleButton
          id="BathroomCheck3"
          type="checkbox"
          variant="outline-dark"
          checked={towerChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>비누</div>
        <ToggleButton
          id="BathroomCheck4"
          type="checkbox"
          variant="outline-dark"
          checked={soapChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>화장지</div>
        <ToggleButton
          id="BathroomCheck5"
          type="checkbox"
          variant="outline-dark"
          checked={tissueChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>헤어드라이어</div>
        <ToggleButton
          id="BathroomCheck6"
          type="checkbox"
          variant="outline-dark"
          checked={hairdryerChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>샴푸</div>
        <ToggleButton
          id="BathroomCheck7"
          type="checkbox"
          variant="outline-dark"
          checked={shampooChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>세탁기</div>
        <ToggleButton
          id="BathroomCheck8"
          type="checkbox"
          variant="outline-dark"
          checked={washerChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>건조기</div>
        <ToggleButton
          id="BathroomCheck9"
          type="checkbox"
          variant="outline-dark"
          checked={dryerChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>청소용품</div>
        <ToggleButton
          id="BathroomCheck10"
          type="checkbox"
          variant="outline-dark"
          checked={cleaningSuppliesChecked}
          value="1"
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


      </div>

      <div className={'AmenityFrameBox2'}>
        <div className={'AmenityBox'}>침실</div>

        <div className={'AmenityTitle'}>침대</div>
        <ToggleButton
          id="BedroomCheck1"
          type="checkbox"
          variant="outline-dark"
          checked={bedChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>침대시트</div>
        <ToggleButton
          id="BedroomCheck2"
          type="checkbox"
          variant="outline-dark"
          checked={bedSheetChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>침구류</div>
        <ToggleButton
          id="BedroomCheck3"
          type="checkbox"
          variant="outline-dark"
          checked={beddingChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

      </div>

      <div className={'AmenityFrameBox3'}>
        <div className={'AmenityBox'}>냉난방</div>

        <div className={'AmenityTitle'}>에어컨</div>
        <ToggleButton
          id="AirConditionerCheck1"
          type="checkbox"
          variant="outline-dark"
          checked={airConChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>난방기</div>
        <ToggleButton
          id="AirConditionerCheck2"
          type="checkbox"
          variant="outline-dark"
          checked={heaterChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>
      </div>

      <div className={'AmenityFrameBox3'}>
        <div className={'AmenityBox'}>인터넷 및 엔터테인</div>

        <div className={'AmenityTitle'}>무선인터넷</div>
        <ToggleButton
          id="EntCheck1"
          type="checkbox"
          variant="outline-dark"
          checked={internetChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>인터넷</div>
        <ToggleButton
          id="EntCheck2"
          type="checkbox"
          variant="outline-dark"
          checked={tvChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>
      </div>

      <div className={'AmenityFrameBox4'}>
        <div className={'AmenityBox'}>주방</div>

        <div className={'AmenityTitle'}>냉장고</div>
        <ToggleButton
          id="kitchen1"
          type="checkbox"
          variant="outline-dark"
          checked={refrigeratorChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>전자레인지</div>
        <ToggleButton
          id="kitchen2"
          type="checkbox"
          variant="outline-dark"
          checked={microwaveChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>


        <div className={'AmenityTitle'}>가스레인지</div>
        <ToggleButton
          id="kitchen3"
          type="checkbox"
          variant="outline-dark"
          checked={gasStoveChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>식기류</div>
        <ToggleButton
          id="kitchen4"
          type="checkbox"
          variant="outline-dark"
          checked={dinnerwareChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

      </div>

      <div className={'AmenityFrameBox3'}>
        <div className={'AmenityBox'}>주차</div>

        <div className={'AmenityTitle'}>유료주차장</div>
        <ToggleButton
          id="parkingLot1"
          type="checkbox"
          variant="outline-dark"
          checked={feeParkingChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>무료주차장</div>
        <ToggleButton
          id="parkingLot2"
          type="checkbox"
          variant="outline-dark"
          checked={freeParkingChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>
      </div>

      <div className={'AmenityFrameBox5'}>

        <div className={'AmenityBox'}>안전시설</div>

        <div className={'AmenityTitle'}>보안카메라</div>
        <ToggleButton
          id="SafetyFacility1"
          type="checkbox"
          variant="outline-dark"
          checked={cctvChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>화재경보기</div>
        <ToggleButton
          id="SafetyFacility2"
          type="checkbox"
          variant="outline-dark"
          checked={fireAlarmChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>일산화탄소경보기</div>
        <ToggleButton
          id="SafetyFacility3"
          type="checkbox"
          variant="outline-dark"
          checked={coAlarmChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>소화기</div>
        <ToggleButton
          id="SafetyFacility4"
          type="checkbox"
          variant="outline-dark"
          checked={fireExtinguisherChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>구급상자</div>
        <ToggleButton
          id="SafetyFacility5"
          type="checkbox"
          variant="outline-dark"
          checked={firstAidKitChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

      </div>

      <div className={'AmenityFrameBox6'}>
        <div className={'AmenityBox'}>기타 서비스</div>

        <div className={'AmenityTitle'}>장기 숙박 가능</div>
        <ToggleButton
          id="EctService1"
          type="checkbox"
          variant="outline-dark"
          checked={longTermChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>동물 동반 가능</div>
        <ToggleButton
          id="EctService2"
          type="checkbox"
          variant="outline-dark"
          checked={petChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>손님 전용 출입구</div>
        <ToggleButton
          id="EctService3"
          type="checkbox"
          variant="outline-dark"
          checked={guestOnlyDoorChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>바베큐 그릴</div>
        <ToggleButton
          id="EctService4"
          type="checkbox"
          variant="outline-dark"
          checked={barbecueChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>수영장</div>
        <ToggleButton
          id="EctService5"
          type="checkbox"
          variant="outline-dark"
          checked={poolChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

        <div className={'AmenityTitle'}>조식</div>
        <ToggleButton
          id="EctService6"
          type="checkbox"
          variant="outline-dark"
          checked={breakfastChecked}
          value='1'
          style={{borderRadius: 30}}
        >
          &#10003;
        </ToggleButton>

      </div>

      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'LocationFormBtn2'} style={{width: 70}} onClick={() => {
          props.setAmenity(false)
        }}>취소
        </button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark" onClick={SetHouseIntro}>저장하기</Button>
      </div>
      <hr/>


    </div>
  )
}

export default AmenityForm;