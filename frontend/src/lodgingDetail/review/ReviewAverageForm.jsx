import React from "react";

function ReviewAverageForm(props) {

    return (
        <>
                <div className={'ReviewFormBox'}>
                    <div>청결도</div>
                    <progress className={'progress'} value={props.cleanGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.cleanGrade}</div>

                    <div>정확성</div>
                    <progress className={'progress'} value={props.accuracyGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.accuracyGrade}</div>

                    <div>의사소통</div>
                    <progress className={'progress'} value={props.communicationGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.communicationGrade}</div>

                    <div>위치</div>
                    <progress className={'progress'} value={props.locationGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.locationGrade}</div>

                    <div>체크인</div>
                    <progress className={'progress'} value={props.checkInGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.checkInGrade}</div>

                    <div>가격 대비 만족도</div>
                    <progress className={'progress'} value={props.costGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{props.costGrade}</div>
                </div>
        </>

    )
}

export default ReviewAverageForm;