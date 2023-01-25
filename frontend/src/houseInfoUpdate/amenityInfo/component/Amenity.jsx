import React, {createContext, useState} from "react";
import AddForm from "../../locationInfo/component/AddForm";
import AmenityForm from "./AmenityForm";
import $ from "jquery";


const Amenity= ()=>{
  const [bathtub, setBathtub] = useState(false);
  const [shower, setShower] = useState(false);
  const [tower, setTower] = useState(false);
  const [soap, setSoap] = useState(false);
  const [tissue, setTissue] = useState(false);
  const [hairdryer, setHairdryer] = useState(false);
  const [shampoo, setShampoo] = useState(false);
  const [washer, setWasher] = useState(false);
  const [dryer, setDryer] = useState(false);
  const [cleaningSupplies, setCleaningSupplies] = useState(false);

  const [bed, setBed] = useState(false);
  const [bedSheet, setBedSheet] = useState(false);
  const [bedding, setBedding] = useState(false);

  const [airCon, setAirCon] = useState(false);
  const [heater, setHeater] = useState(false);

  const [internet, setInternet] = useState(false);
  const [tv, setTv] = useState(false);

  const [refrigerator, setRefrigerator] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [gasStove, setGasStove] = useState(false);
  const [dinnerware, setDinnerware] = useState(false);

  const [feeParking, setFeeParking] = useState(false);
  const [freeParking, setFreeParking] = useState(false);

  const [cctv, setCCTV] = useState(false);
  const [fireAlarm, setFireAlarm] = useState(false);
  const [coAlarm, setCOAlarm] = useState(false);
  const [fireExtinguisher, setFireExtinguisher] = useState(false);
  const [firstAidKit, setFirstAidKit] = useState(false);

  const [longTerm, setLongTerm] = useState(false);
  const [pet, setPet] = useState(false);
  const [guestOnlyDoor, setGuestOnlyDoor] = useState(false);
  const [barbecue, setBarbecue] = useState(false);
  const [pool, setPool] = useState(false);
  const [breakfast, setBreakfast] = useState(false);

  const [amenity, setAmenity] = useState(false);



  return(
    <div>
      <div className={'AmenityFrame1'} id={'Add'}>
        <p className={'HNameLine1'} style={{fontSize:20}}>종류</p>
        <button className={'BasicInfoBtn'} id={'AddBtn'} onClick={() => {
          setAmenity(!amenity)
        }}>{amenity ? "취소" : "수정"}</button>
      </div>

      <div className={'AmenityFrame2'}>
        {bathtub && <div className={'HNameLine3'}>욕조</div>}
        {shower && <div className={'HNameLine3'}>샤워기</div>}
        {tower && <div className={'HNameLine3'}>수건</div>}
        {soap && <div className={'HNameLine3'}>수건</div>}
        {tissue && <div className={'HNameLine3'}>화장지</div>}
        {hairdryer && <div className={'HNameLine3'}>헤어드라이기</div>}
        {shampoo && <div className={'HNameLine3'}>샴푸</div>}
        {washer && <div className={'HNameLine3'}>세탁기</div>}
        {dryer && <div className={'HNameLine3'}>건조기</div>}
        {cleaningSupplies && <div className={'HNameLine3'}>청소용품</div>}
        {bed && <div className={'HNameLine3'}>침대</div>}
        {bedSheet && <div className={'HNameLine3'}>침대시트</div>}
        {bedding && <div className={'HNameLine3'}>침구류</div>}
        {airCon && <div className={'HNameLine3'}>에어컨</div>}
        {heater && <div className={'HNameLine3'}>난방기</div>}
        {internet && <div className={'HNameLine3'}>무선인터넷</div>}
        {tv && <div className={'HNameLine3'}>TV</div>}
        {refrigerator && <div className={'HNameLine3'}>냉장고</div>}
        {microwave && <div className={'HNameLine3'}>전자레인지</div>}
        {gasStove && <div className={'HNameLine3'}>가스레인지</div>}
        {dinnerware && <div className={'HNameLine3'}>식기류</div>}
        {feeParking && <div className={'HNameLine3'}>유료 주차장</div>}
        {freeParking && <div className={'HNameLine3'}>무료 주차장</div>}
        {cctv && <div className={'HNameLine3'}>CCTV</div>}
        {fireAlarm && <div className={'HNameLine3'}>화제 경보기</div>}
        {coAlarm && <div className={'HNameLine3'}>일산화탄소 경보기</div>}
        {fireExtinguisher && <div className={'HNameLine3'}>소화기</div>}
        {firstAidKit && <div className={'HNameLine3'}>응급구급상자</div>}
        {longTerm && <div className={'HNameLine3'}>장기 숙박 가능</div>}
        {pet && <div className={'HNameLine3'}>동물 동반 가능</div>}
        {guestOnlyDoor && <div className={'HNameLine3'}>손님 전용 출입구</div>}
        {barbecue && <div className={'HNameLine3'}>바베큐 그릴</div>}
        {pool && <div className={'HNameLine3'}>수영장</div>}
        {breakfast && <div className={'HNameLine3'}>조식</div>}
      </div>
      {amenity && <AmenityForm setAmenity={setAmenity}

                            bathtub={bathtub} setBathtub={setBathtub}
                            shower={shower} setShower={setShower}
                            tower={tower} setTower={setTower}
                            soap={soap} setSoap={setSoap}
                            tissue={tissue} setTissue={setTissue}
                            hairdryer={hairdryer} setHairdryer={setHairdryer}
                            shampoo={shampoo} setShampoo={setShampoo}
                            washer={washer} setWasher={setWasher}
                            dryer={dryer} setDryer={setDryer}
                            cleaningSupplies={cleaningSupplies} setCleaningSupplies={setCleaningSupplies}

                            bed={bed} setBed={setBed}
                            bedSheet={bedSheet} setBedSheet={setBedSheet}
                            bedding={bedding} setBedding={setBedding}

                            airCon={airCon} setAirCon={setAirCon}
                            heater={heater} setHeater={setHeater}

                            internet={internet} setInternet={setInternet}
                            tv={tv} setTv={setTv}

                            refrigerator={refrigerator} setRefrigerator={setRefrigerator}
                            microwave={microwave} setMicrowave={setMicrowave}
                            gasStove={gasStove} setGasStove={setGasStove}
                            dinnerware={dinnerware} setDinnerware={setDinnerware}

                            feeParking={feeParking} setFeeParking={setFeeParking}
                            freeParking={freeParking} setFreeParking={setFreeParking}

                            cctv={cctv} setCCTV={setCCTV}
                            fireAlarm={fireAlarm} setFireAlarm={setFireAlarm}
                            coAlarm={coAlarm} setCOAlarm={setCOAlarm}
                            fireExtinguisher={fireExtinguisher} setFireExtinguisher={setFireExtinguisher}
                            firstAidKit={firstAidKit} setFirstAidKit={setFirstAidKit}

                            longTerm={longTerm} setLongTerm={setLongTerm}
                            pet={pet} setPet={setPet}
                            guestOnlyDoor={guestOnlyDoor} setGuestOnlyDoor={setGuestOnlyDoor}
                            barbecue={barbecue} setBarbecue={setBarbecue}
                            pool={pool} setPool={setPool}
                            breakfast={breakfast} setBreakfast={setBreakfast}/>}
      <hr style={{marginBottom:50}}/>
    </div>
  )
}

export default Amenity;