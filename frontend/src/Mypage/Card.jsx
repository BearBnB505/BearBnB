import React from "react";

function Card(props) {
    return (
        <div className={"col-sm-4"}>
            <div className={"card"}>
                <div className={"card-body"}>
                    <div className={"card-title"}>{props.title}</div>
                    <div className={"card-text"}>{props.content}</div>
                </div>
            </div>
        </div>
    )
}



export default Card;