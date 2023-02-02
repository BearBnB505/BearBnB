import React, {useState} from "react";

function Keep(props) {

    const keep = {
        width: 25,
        // opacity: .60
        cursor: "pointer",
    };

    const [keepMode, setKeepMode] = useState(false)

    return (
        <>
            <img src={keepMode ? "/img/keepLodging.png" : "/img/btnKeep.png"} alt="" style={keep} onClick={() => setKeepMode(!keepMode)}/>
        </>
    );
}

export default Keep;