import React, {useEffect, useState} from "react";
import {Button, ToggleButton} from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import {useLocation} from "react-router";

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
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

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
    axios.put('http://localhost:8080/comfortList/',null,{params: {lodgingNum: lodgingNum}})

      .then((req) => {
        const {data} = req;
        setData(data);
        props.bathtub == false ? setBathtubChecked(false) : setBathtubChecked(true)
        props.shower == false ? setShowerChecked(false) : setShowerChecked(true)
        props.tower == false ? setTowerChecked(false) : setTowerChecked(true)
        props.soap == false ? setSoapChecked(false) : setSoapChecked(true)
        props.tissue == false  ? setTissueChecked(false) : setTissueChecked(true)
        props.hairdryer == false  ? setHairdryerChecked(false) : setHairdryerChecked(true)
        props.shampoo == false ? setShampooChecked(false) : setShampooChecked(true)
        props.washer == false ? setWasherChecked(false) : setWasherChecked(true)
        props.dryer == false ? setDryerChecked(false) : setDryerChecked(true)
        props.cleaningSupplies == false ? setCleaningSuppliesChecked(false) : setCleaningSuppliesChecked(true)

        props.bed == false ? setBedChecked(false) : setBedChecked(true)
        props.bedSheet == false ? setBedSheetChecked(false) : setBedSheetChecked(true)
        props.bedding == false ? setBeddingChecked(false) : setBeddingChecked(true)

        props.airCon == false ? setAirConChecked(false) : setAirConChecked(true)
        props.heater == false ? setHeaterChecked(false) : setHeaterChecked(true)

        props.internet == false ? setInternetChecked(false) : setInternetChecked(true)
        props.tv == false ? setTVChecked(false) : setTVChecked(true)

        props.refrigerator == false ? setRefrigeratorChecked(false) : setRefrigeratorChecked(true)
        props.microwave == false ? setMicrowaveChecked(false) : setMicrowaveChecked(true)
        props.gasStove == false ? setGasStoveChecked(false) : setGasStoveChecked(true)
        props.dinnerware == false ? setDinnerwareChecked(false) : setDinnerwareChecked(true)

        props.feeParking == false ? setFeeParkingChecked(false) : setFeeParkingChecked(true)
        props.freeParking == false ? setFreeParkingChecked(false) : setFreeParkingChecked(true)

        props.cctv == false ? setCCTVChecked(false) : setCCTVChecked(true)
        props.fireAlarm == false ? setFireAlarmChecked(false) : setFireAlarmChecked(true)
        props.coAlarm == false ? setCOAlarmChecked(false) : setCOAlarmChecked(true)
        props.fireExtinguisher == false ? setFireExtinguisherChecked(false) : setFireExtinguisherChecked(true)
        props.firstAidKit == false ? setFirstAidKitChecked(false) : setFirstAidKitChecked(true)

        props.longTerm == false ? setLongTermChecked(false) : setLongTermChecked(true)
        props.pet == false ? setPetChecked(false) : setPetChecked(true)
        props.guestOnlyDoor == false ? setGuestOnlyDoorChecked(false) : setGuestOnlyDoorChecked(true)
        props.barbecue == false ? setBarbecueChecked(false) : setBarbecueChecked(true)
        props.pool == false ? setPoolChecked(false) : setPoolChecked(true)
        props.breakfast == false ? setBreakfastChecked(false) : setBreakfastChecked(true)
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);




  const SetComfortListBtn=()=>{
    props.setAmenity(false)
    const SetComfortList = [
      {lodgingNum : data[0].lodgingNum, comfortId : data[0].comfortId, usableYn : props.bathtub},
      {lodgingNum : data[1].lodgingNum, comfortId : data[1].comfortId, usableYn : props.shower},
      {lodgingNum : data[2].lodgingNum, comfortId : data[2].comfortId, usableYn : props.tower},
      {lodgingNum : data[3].lodgingNum, comfortId : data[3].comfortId, usableYn : props.soap},
      {lodgingNum : data[4].lodgingNum, comfortId : data[4].comfortId, usableYn : props.tissue},
      {lodgingNum : data[5].lodgingNum, comfortId : data[5].comfortId, usableYn : props.hairdryer},
      {lodgingNum : data[6].lodgingNum, comfortId : data[6].comfortId, usableYn : props.shampoo},
      {lodgingNum : data[7].lodgingNum, comfortId : data[7].comfortId, usableYn : props.washer},
      {lodgingNum : data[8].lodgingNum, comfortId : data[8].comfortId, usableYn : props.dryer},
      {lodgingNum : data[9].lodgingNum, comfortId : data[9].comfortId, usableYn : props.cleaningSupplies},

      {lodgingNum : data[10].lodgingNum, comfortId : data[10].comfortId, usableYn : props.bed},
      {lodgingNum : data[11].lodgingNum, comfortId : data[11].comfortId, usableYn : props.bedSheet},
      {lodgingNum : data[12].lodgingNum, comfortId : data[12].comfortId, usableYn : props.bedding},

      {lodgingNum : data[13].lodgingNum, comfortId : data[13].comfortId, usableYn : props.airCon},
      {lodgingNum : data[14].lodgingNum, comfortId : data[14].comfortId, usableYn : props.heater},

      {lodgingNum : data[15].lodgingNum, comfortId : data[15].comfortId, usableYn : props.internet},
      {lodgingNum : data[16].lodgingNum, comfortId : data[16].comfortId, usableYn : props.tv},

      {lodgingNum : data[17].lodgingNum, comfortId : data[17].comfortId, usableYn : props.refrigerator},
      {lodgingNum : data[18].lodgingNum, comfortId : data[18].comfortId, usableYn : props.microwave},
      {lodgingNum : data[19].lodgingNum, comfortId : data[19].comfortId, usableYn : props.gasStove},
      {lodgingNum : data[20].lodgingNum, comfortId : data[20].comfortId, usableYn : props.dinnerware},

      {lodgingNum : data[21].lodgingNum, comfortId : data[21].comfortId, usableYn : props.feeParking},
      {lodgingNum : data[22].lodgingNum, comfortId : data[22].comfortId, usableYn : props.freeParking},

      {lodgingNum : data[23].lodgingNum, comfortId : data[23].comfortId, usableYn : props.cctv},
      {lodgingNum : data[24].lodgingNum, comfortId : data[24].comfortId, usableYn : props.fireAlarm},
      {lodgingNum : data[25].lodgingNum, comfortId : data[25].comfortId, usableYn : props.coAlarm},
      {lodgingNum : data[26].lodgingNum, comfortId : data[26].comfortId, usableYn : props.fireExtinguisher},
      {lodgingNum : data[27].lodgingNum, comfortId : data[27].comfortId, usableYn : props.firstAidKit},

      {lodgingNum : data[28].lodgingNum, comfortId : data[28].comfortId, usableYn : props.longTerm},
      {lodgingNum : data[29].lodgingNum, comfortId : data[29].comfortId, usableYn : props.pet},
      {lodgingNum : data[30].lodgingNum, comfortId : data[30].comfortId, usableYn : props.guestOnlyDoor},
      {lodgingNum : data[31].lodgingNum, comfortId : data[31].comfortId, usableYn : props.barbecue},
      {lodgingNum : data[32].lodgingNum, comfortId : data[32].comfortId, usableYn : props.pool},
      {lodgingNum : data[33].lodgingNum, comfortId : data[33].comfortId, usableYn : props.breakfast}
    ]

    // const test2 = JSON.stringify(test);
    // console.log(`json 문자열 : ${test2}`);

    //  잠시 꺼둠//////////////////////////////
    // axios.post('http://localhost:8080/UpdateComfortsList', SetComfortList, null)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios.put('http://localhost:8080/UpdateComfortsList', SetComfortList, null)
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
        <Button className={'BasicInfoBtn3'} variant="outline-dark" onClick={SetComfortListBtn}>저장하기</Button>
      </div>
      <hr/>

    </div>
  )
}

export default AmenityForm;