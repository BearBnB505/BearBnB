import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const average = [
    {
        idx: "1",
        idx_name: "청결도",
        grade: "4.2",
    },
    {
        idx: "2",
        idx_name: "정확성",
        grade: "4.6",
    },
    {
        idx: "3",
        idx_name: "의사소통",
        grade: "4.8",
    },
    {
        idx: "4",
        idx_name: "위치",
        grade: "4.9",
    },
    {
        idx: "5",
        idx_name: "체크인",
        grade: "4.5",
    },
    {
        idx: "6",
        idx_name: "가격 대비 만족도",
        grade: "4.2",
    },

]


function ModalAverageForm() {
    return (
        <div className={"mt-3"}>
            <h4 className={"mb-4"}>
                <FontAwesomeIcon icon={faStar} size="1x" className={"me-1"}/>
                <sapn className={"fw-bold"}>
                    4.86 · 후기 238개
                </sapn>
            </h4>
            <div className={"row"}>
                {average.map((item) => {
                    return <AverageList idx={item.idx} idx_name={item.idx_name} grade={item.grade}/>
                })}
            </div>
        </div>
    )
}


function AverageList({idx_name, grade}) {
    return (
        <div>
            <ul className={"list-group list-group-horizontal"} style={averageStyle.ul}>
                <li className={"list-group item col-sm-4 col-md-4"}>
                    {idx_name}
                </li>
                <li className={"list-group item col-sm-7 col-md-7"}>
                    <progress className={'progress w-75'} value={grade} min="0" max="5"></progress>
                </li>
                <li className={"list-group item col-sm-1 col-md-1"}>
                    {grade}
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