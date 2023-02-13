import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './user';
import {locationDetails} from "../Reducers/LodgingLocationDetailReducer";

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                // dispatch(login({name: "내 이름", age: 20, email: "email@gmail.com"}))
                dispatch(locationDetails({nation: "내 이름", addr1:'3', addr2: "email@gmail.com", zipCode:111}))
            }}>Login</button>
        </div>
    );
}

export default Login