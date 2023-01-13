import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



function Join(props){

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const[Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
}

export default Join;