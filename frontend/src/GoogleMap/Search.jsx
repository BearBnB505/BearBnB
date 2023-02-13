
import React, {useState} from "react";
import {LoadScript, MarkerF} from '@react-google-maps/api';
import {GoogleMap, StandaloneSearchBox} from "@react-google-maps/api";
import * as gvar from "./global_variables";

const libraries = ['places'];

function Search(props) {
    const styles = {
        default: [],
        hide: [
            {
                featureType: "poi.business",
                stylers: [{ visibility: "on" }],
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

    const mapContainerStyle = {
        height: "400px",
        width: "800px",
        marginTop: 70,
    };

    const center = {
        lat: 35.15598478158248,
        lng: 129.0595193506146
    };

    const [searchBox, setSearchBox] = useState(null);
    const [location, setLocation] = useState(center);
    const [zoom, setZoom] = useState(15);

    function handleLoad(ref) {
        setSearchBox(ref);
    }

    function handlePlacesChanged() {
        console.log(searchBox.getPlaces());
        // console.log(searchBox.getPlaces()[0].name);
        console.log(searchBox.getPlaces()[0].formatted_address);
        // console.log(searchBox.getPlaces()[0].geometry.location.lat());
        // console.log(searchBox.getPlaces()[0].geometry.location.lng());
        const lat = searchBox.getPlaces()[0].geometry.location.lat();
        const lng = searchBox.getPlaces()[0].geometry.location.lng();
        setLocation({lat, lng});
        setZoom(18);
    }

    const onDragEnd = (e) => {
        let newPosition = {
            latitude: e.latLng.lat(),
            longitude: e.latLng.lng()
        };
        setLocation(newPosition);
    }

    console.log(location);

    return (
        <div className={"d-flex justify-content-center mt-5"}>
            <LoadScript id="script-loader" googleMapsApiKey={gvar.BEE_API_KEY} libraries={libraries} zoom={10}>
                <StandaloneSearchBox
                    onLoad={handleLoad}
                    onPlacesChanged={
                        handlePlacesChanged
                    }
                >
                    <input
                        type="text"
                        placeholder="주소를 입력하세요"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `600px`,
                            height: `50px`,
                            padding: `0 12px`,
                            borderRadius: `10px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `18px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            // left: "50%",
                            // marginLeft: "-120px",
                        }}
                    />
                </StandaloneSearchBox>

                <GoogleMap
                    id="searchbox"
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoom}
                    center={location}
                    options={{styles:styles.hide}}
                >
                    <MarkerF
                        position={location}
                        draggable
                        onDragEnd={onDragEnd}
                        // onLoad={onMarkerLoad}
                    />
                </GoogleMap>

            </LoadScript>
        </div>
    )

}

export default Search;

export function SearchHeader(props) {

    const styles = {
        navInputSpot: {
            // cursor:"pointer",
            width:220,
            fontSize:15
        },
    }

    const [searchBox, setSearchBox] = useState(null);

    function handleLoad(ref) {
        setSearchBox(ref);
    }

    function handlePlacesChanged() {
        console.log(searchBox.getPlaces());
        // console.log(searchBox.getPlaces()[0].name);
        const spotName = searchBox.getPlaces()[0].name;
        console.log("search : " + spotName);
        // console.log(searchBox.getPlaces()[0].geometry.location.lat());
        // console.log(searchBox.getPlaces()[0].geometry.location.lng());
        // const lat = searchBox.getPlaces()[0].geometry.location.lat();
        // const lng = searchBox.getPlaces()[0].geometry.location.lng();
        props.spot(spotName);
    }

    return (
        <div className={"px-0"}>
            <LoadScript id="script-loader" googleMapsApiKey={gvar.BEE_API_KEY} libraries={libraries} zoom={10}>
                <StandaloneSearchBox
                    onLoad={handleLoad}
                    onPlacesChanged={handlePlacesChanged}
                    style={{zIndex:9999}}
                >
                    <input type="text" id={"chooseSpot"} className={"border-0 p-0"} placeholder={"여행지 검색"} style={styles.navInputSpot}/>
                </StandaloneSearchBox>
            </LoadScript>
        </div>
    )
}

