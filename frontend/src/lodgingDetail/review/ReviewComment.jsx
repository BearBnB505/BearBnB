import React from "react";

function ReviewComment(props){
    return(
    <div className={'CommentBox'}>
      <img className={'ReviewUserImg'} src={"/hostImg/1.png"} alt={"hostImg"}></img>
      <div className={'commentLine1'}>쥐돌이</div>
      <div className={'commentLine2'}>2022.11.21</div>
      <div></div>
      <div className={'CommentText'}>저희는 매우 행복합니다. 매우 멋진 전원주택이며 전망이 정말 좋습니다. Rahtut와 그의 동생은 모든 것을 처리하고 최고급
        서비스와 아침 식사를 제공합니다. 발리에서 방문한 모든 장소 중 이 오두막과 서비스는 1등입니다.
        다음에 또 기회가 된다면 또 놀러와서 하루 더 머물다 가겠습니다. 수영장도 매우 좋고 프라이빗합니다.</div>
    </div>
  )
}

export default ReviewComment;