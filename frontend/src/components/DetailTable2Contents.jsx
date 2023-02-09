import React from "react";

function DetailTable2Contents({avg, complain, lodging, comfort}) {
    const peopleMax = []
    return (
        <>
            <div className={"col-7"}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>숙소명 : </strong> {lodging.lodgingName}</li>
                    <li className="list-group-item"><strong>숙소번호 : </strong> {lodging.lodgingNum}</li>
                    <li className="list-group-item"><strong>등록일 : </strong> {lodging.createDt}</li>
                    <li className="list-group-item"><strong>주소
                        : </strong>({lodging.zipCode}) {lodging.nation}, {lodging.address1}, {lodging.address2}</li>
                    <li className="list-group-item"><strong>최대인원 : </strong>{lodging.peopleNum}명</li>
                    <li className="list-group-item"><strong>숙박장소 : </strong>침실 {lodging.bedroomNum}개,
                        침대 {lodging.bedNum}개, 욕실 {lodging.bathroomNum}개
                    </li>
                    <li className="list-group-item"><strong>편의사항 : </strong>
                        {comfort.map((item) => (
                            <span> {item.comfortId}, </span>
                        ))}
                    </li>
                </ul>
            </div>
            <div className={"col-3"}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>컨셉 : </strong>{lodging.lodgingConcept}</li>
                    <li className="list-group-item"><strong>호스트 : </strong>{lodging.userId}</li>
                    <li className="list-group-item"><strong>숙박비(1박) : </strong>{lodging.cost}원</li>
                    <li className="list-group-item"></li>
                </ul>
            </div>

            <div className={"col-12 mb-4"}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>숙소설명</strong></li>
                    <li className="list-group-item">{lodging.introLodging}</li>
                </ul>
            </div>
        </>
    )
}

export default DetailTable2Contents;