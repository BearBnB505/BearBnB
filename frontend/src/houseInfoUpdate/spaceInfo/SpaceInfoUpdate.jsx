import React from "react";
import HouseConcept from "./component/HouseConcept";
import BedNRestroom from "./component/BedNRestroom";

const SpaceInfoUpdate=()=>{
  return(
    <div>
      <div className={'BasicTitle'} style={{marginTop: 30}}>
        숙소 및 객실
        <HouseConcept/>
        <BedNRestroom/>
      </div>
    </div>
  )
}

export default SpaceInfoUpdate;