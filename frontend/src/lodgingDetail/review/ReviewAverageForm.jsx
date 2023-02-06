import React, {useContext} from "react";

function ReviewAverageForm(props) {
    return (
        <div className={'ReviewFormBox'}>
            <div>청결도</div>
            <progress className={'progress'} value="3" min="0" max="5"></progress>
            <div className={'DetailAvg'}>3.0</div>

            <div>정확성</div>
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

export default ReviewAverageForm;