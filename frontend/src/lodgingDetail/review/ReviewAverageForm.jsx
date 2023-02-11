import React from "react";

function ReviewAverageForm({avg}) {

    return (
        <>
                <div className={'ReviewFormBox'}>
                    <div>청결도</div>
                    <progress className={'progress'} value={avg.cleanGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.cleanGrade}</div>

                    <div>정확성</div>
                    <progress className={'progress'} value={avg.accuracyGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.accuracyGrade}</div>

                    <div>의사소통</div>
                    <progress className={'progress'} value={avg.communicationGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.communicationGrade}</div>

                    <div>위치</div>
                    <progress className={'progress'} value={avg.locationGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.locationGrade}</div>

                    <div>체크인</div>
                    <progress className={'progress'} value={avg.checkInGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.checkInGrade}</div>

                    <div>가격 대비 만족도</div>
                    <progress className={'progress'} value={avg.costGrade} min="0" max="5"></progress>
                    <div className={'DetailAvg'}>{avg.costGrade}</div>
                </div>
        </>

    )
}

export default ReviewAverageForm;