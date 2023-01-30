import React, {useState} from "react";
// import { RangeDatePicker } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";

import moment, {now} from "moment";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import "react-datepicker/dist/react-datepicker.css";
import {addDays, getDate} from "date-fns"
import { DateRange } from 'react-date-range';


export default function Calendar() {

    // const [dateRange, setDateRange] = useState([null, null]);
    // // const [startDate, endDate] = dateRange;
    //
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ])

    return (
        <div className={"container d-flex justify-content-center mt-4"}>
            <DateRange
                // minDate={Date.now()}
                minDate={new Date(now())}
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                direction="horizontal"
            />

        </div>
    );
}
