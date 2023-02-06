import React, {useEffect, useState} from "react";

import moment, {now} from "moment";

import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import './default.scss'

import { DateRange } from 'react-date-range';


export default function Calendar(props) {

    const [state, setState] = useState([
        {
            startDate : null,
            endDate : new Date(""),
            key: "selection",
        },
    ]);

    useEffect(() => {
        props.dateValue([null, null]);
    },[]);


    const chooseDate = (item) => {
        setState([item.selection]);
        props.dateValue([item.selection.startDate, item.selection.endDate]);
    }

    return (
        <div className={"container d-flex justify-content-center mt-4"}>
            <DateRange
                minDate={new Date(now())}
                editableDateInputs={true}
                onChange={chooseDate}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                direction="horizontal"
                startDatePlaceholder={"체크인"}
                endDatePlaceholder={"체크아웃"}
                showMonthAndYearPickers={false}
                fixedHeight={true}
            />
        </div>
    );
}
