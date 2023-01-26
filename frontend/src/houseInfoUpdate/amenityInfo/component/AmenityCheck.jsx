import React, {useState} from "react";
import {ToggleButton} from "react-bootstrap";

const AmenityCheck=(props)=>{
  const [checked, setChecked] = useState(false);

  return(
    <>
      <div className={'AmenityTitle'}>욕조</div>
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="outline-dark"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
        onClick={props.setBathtub(!props.bathtub)}
        style={{borderRadius: 30}}
      >
        &#10003;
      </ToggleButton>
    </>
  )
}

export default AmenityCheck;