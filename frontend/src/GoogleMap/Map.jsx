import * as gvar from './global_variables'

import React, {useCallback, useEffect, useState} from "react";
import {
    GoogleMap,
    MarkerF,
    useJsApiLoader
} from "@react-google-maps/api";

const containerStyle = {
    width: 1230,
    height: 500,
};


function Map(props) {

    const [zoomLevel, setZoomLevel] = useState(10);

    useEffect(() => {
        setZoomLevel(18);
    }, [])


    const center = {
        lat: props.lat,
        lng: props.lng,
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

    const styles = {
        default: [],
        hide: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.medical",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.school",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.sports_complex",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.place_of_worship",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.government",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: props.lat, lng: props.lng}}
                zoom={zoomLevel}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{styles:styles.hide}}
            >
                <MarkerF
                    position={center}
                    // draggable
                    // onDragEnd={onDragEnd}
                    // onLoad={onMarkerLoad}
                />
            </GoogleMap>
        </div>
    ) : <></>

}

export default React.memo(Map);