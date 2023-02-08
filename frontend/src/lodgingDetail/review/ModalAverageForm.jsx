import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import AvgContext from "../Context/AvgContext";

function ModalAverageForm() {
    const avg = useContext(AvgContext)
    return (
        <div className={"mt-3"}>
            <h4 className={"mb-4"}>
                <FontAwesomeIcon icon={faStar} size="1x" className={"me-1"}/>
                <sapn className={"fw-bold"}>
                    {avg.reviewTotal} · 후기 {avg.reviewCount}개
                </sapn>
            </h4>
            <div className={"row"}>
                    <AverageList cleanGrade={avg.cleanGrade} accuracyGrade={avg.accuracyGrade}
                                 communicationGrade={avg.communicationGrade} locationGrade={avg.locationGrade} checkInGrade={avg.checkInGrade} costGrade={avg.costGrade}/>
            </div>
        </div>
    )
}

function AverageList(props) {
    return (
        <div>
            <ul className={"list-group list-group-horizontal"} style={averageStyle.ul}>
                <li className={"list-group item col-sm-4 col-md-4"}>
                    <div className={"mb-1 py-1"}>청결도</div>
                    <div className={"mb-1 py-1"}>정확성</div>
                    <div className={"mb-1 py-1"}>의사소통</div>
                    <div className={"mb-1 py-1"}>위치</div>
                    <div className={"mb-1 py-1"}>체크인</div>
                    <div className={"mb-1 py-1"}>가격대비 만족도</div>
                </li>

                <li className={"list-group item col-sm-7 col-md-7"}>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.cleanGrade} min="0" max="5"></progress>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.accuracyGrade} min="0" max="5"></progress>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.communicationGrade} min="0" max="5"></progress>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.locationGrade} min="0" max="5"></progress>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.checkInGrade} min="0" max="5"></progress>
                    <progress className={'progress w-75 mb-4 my-1'} value={props.costGrade} min="0" max="5"></progress>
                </li>
                <li className={"list-group item col-sm-1 col-md-1"}>
                    <div className={"mb-2 my-1"}>{props.cleanGrade}</div>
                    <div className={"mb-2 my-1"}>{props.accuracyGrade}</div>
                    <div className={"mb-2 my-1"}>{props.communicationGrade}</div>
                    <div className={"mb-2 my-1"}>{props.locationGrade}</div>
                    <div className={"mb-2 my-1"}>{props.checkInGrade}</div>
                    <div className={"mb-2 my-1"}>{props.costGrade}</div>
                </li>

            </ul>
        </div>
    )
}

const averageStyle = {
    ul: {
        fontSize: "13px",
        marginBottom: "8px",
    },

}

export default ModalAverageForm;