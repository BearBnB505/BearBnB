import React from 'react'
import { useSelector } from 'react-redux'
import Login from "./Login";

function Profile() {
    // const user = useSelector((state) => state.user.value)
    const user = useSelector((state) => state.locationDetail.value)
    return (
        <div>
            <h1>Profile Page</h1>
            {/*<p> Name : {user.name} </p>*/}
            {/*<p> Age : {user.age} </p>*/}
            {/*<p> Email : {user.email} </p>*/}
            <p> Name : {user.nation} </p>
            <p> Age : {user.addr1} </p>
            <p> Email : {user.addr2} </p>
            <p> Email : {user.zipCode} </p>
            <Login/>
        </div>

    );
}

export default Profile