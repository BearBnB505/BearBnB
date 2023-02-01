import React from "react";

function HouseExplain(props){
  return(
    <div className={'containerExplain my-4 pt-2'}>
      {/*<hr className={'PositionHr'}/>*/}
      {/*<div className={'PositionHr'}></div>*/}
      <div className={'EXPLine mb-4 pb-2'}>숙소설명</div>
      <div className={'pt-2 pb-4'}>
        <p>
          {props.introLodging}
        </p>
      </div>

    </div>
  )
}

export default HouseExplain