import React from "react";

function ReviewTitle(props){
  return(
    <div className={'ReviewAvgTitleBox'}>
      <div style= {{position:"relative", left:-8}}>&#x2B50;</div>
      <div>4.9</div>
      <div>· 후기 :</div>
      <div>55&nbsp;개</div>
    </div>
  )
}

export default ReviewTitle;