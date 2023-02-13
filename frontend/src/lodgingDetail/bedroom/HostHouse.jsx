import React from "react";
import '../lodgingDetail.css';

function HostHouse({lodging}) {
    return (
        <div>
            <hr/>
            <div className={'containerHouse'}>
                <div className={'HouseLine'}>숙박장소</div>
                <div className={'HouseLine2'}>
                    <div className={"card p-4"}>
                        <span><strong>침실</strong></span>
                        <span>침실 {lodging.bedroomNum}</span>
                    </div>
                </div>
                <div className={'HouseLine2'}>
                    <div className={"card p-4"}>
                        <span><strong>침대</strong></span>
                        <span>침대 {lodging.bedNum}</span>
                    </div>
                </div>
                <div className={'HouseLine2'}>
                    <div className={"card p-4"}>
                        <span><strong>욕실</strong></span>
                        <span>욕실 {lodging.bathroomNum}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HostHouse