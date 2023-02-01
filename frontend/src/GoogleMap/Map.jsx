import * as gvar from './global_variables'

import React, {useCallback, useState} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
    width: 1230,
    height: 500,
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map(props) {

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
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(Map);