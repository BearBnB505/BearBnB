import React from "react";

function HouseExplain({lodging}){
  return(
    <div className={'containerExplain my-4 pt-2'}>
      <div className={'EXPLine mb-4 pb-2'}>숙소설명</div>
      <div className={'pt-2 pb-4'}>
        <p>
          {lodging.introLodging}
        </p>
      </div>
    </div>
  )
}

export default HouseExplain