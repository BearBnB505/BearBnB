import React from "react";
import './Comment.css'



const CommentAverage=()=>{
  return(
    <div className={'CommentFrame1'}>
      <div >청결도</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>

      <div>정확도</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>

      <div>의사소통</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>

      <div>위치</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>

      <div>체크인</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>

      <div>가격 대비 만족도</div>
      <progress className={'progress'} value="3" min="0" max="5"></progress>
      <div className={'DetailAvg'}>3.0</div>
    </div>
  )
}

export default CommentAverage