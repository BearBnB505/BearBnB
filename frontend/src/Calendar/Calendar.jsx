import React, {useState} from "react";
// import { RangeDatePicker } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";

import moment, {now} from "moment";

import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import './default.scss'

import { DateRange, DateRangePicker } from 'react-date-range';


export default function Calendar(props) {

    // const [dateRange, setDateRange] = useState([null, null]);
    // // const [startDate, endDate] = dateRange;
    //
    // const [startDate, setStartDate] = useState(new Date(null));
    // const [endDate, setEndDate] = useState(new Date(null));

    const [state, setState] = useState([
        {
            startDate : null,
            endDate : new Date(""),
            key: "selection",
        },
    ])

    return (
        <div className={"container d-flex justify-content-center mt-4"}>
            <DateRange
                minDate={new Date(now())}
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
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
