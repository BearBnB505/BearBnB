import * as gvar from './global_variables'

import React, {useCallback, useState} from "react";
import {GoogleMap, LoadScript, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
    width: 1230,
    height: 500,
};


function Map(props) {
    console.log(props.lat);

    const center = {
        lat: parseFloat(props.lat),
        lng: parseFloat(props.lng),
    };

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: gvar.BEE_API_KEY
    })

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <></>
            </GoogleMap>
        </div>
    ) : <></>

    // return (
    //     <LoadScript
    //         googleMapsApiKey={gvar.BEE_API_KEY}
    //     >
    //         <GoogleMap
    //             mapContainerStyle={containerStyle}
    //             center={center}
    //             zoom={18}
    //             onLoad={onLoad}
    //             onUnmount={onUnmount}
    //         >
    //         </GoogleMap>
    //     </LoadScript>
    // )
}

export default React.memo(Map);