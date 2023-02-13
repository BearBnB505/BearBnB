// import React, {useState} from "react";
// import {LoadScript, MarkerF} from '@react-google-maps/api';
// import {GoogleMap, StandaloneSearchBox} from "@react-google-maps/api";
// // import * as gvar from "./global_variables";
// import {basicInfo} from "../lodging_reg/Reducers/LodgingbedReducer";
// import {useDispatch} from "react-redux";
// import {maps} from "../lodging_reg/Reducers/LodgingMapReducer";
// import {Link} from "react-router-dom";
//
// function Search(props) {
//
//     const mapContainerStyle = {
//         height: "400px",
//         width: "800px",
//         marginTop: 70,
//     };
//
//     const center = {
//         lat: 35.15598478158248,
//         lng: 129.0595193506146
//     };
//
//     const styles = {
//         default: [],
//         hide: [
//             {
//                 featureType: "poi.business",
//                 stylers: [{ visibility: "on" }],
//             },
//             {
//                 featureType: "poi.medical",
//                 stylers: [{ visibility: "off" }],
//             },
//             {
//                 featureType: "poi.school",
//                 stylers: [{ visibility: "off" }],
//             },
//             {
//                 featureType: "poi.sports_complex",
//                 stylers: [{ visibility: "off" }],
//             },
//             {
//                 featureType: "poi.place_of_worship",
//                 stylers: [{ visibility: "off" }],
//             },
//             {
//                 featureType: "poi.government",
//                 stylers: [{ visibility: "off" }],
//             },
//         ],
//     };
//
//
//     const [searchBox, setSearchBox] = useState(null);
//     const [location, setLocation] = useState(center);
//     const [zoom, setZoom] = useState(15);
//     const [address1, setAddress1] = useState('');
//     const dispatch = useDispatch();
//
//     const inputAddress = (e) => {
//         console.log(e.target.value)
//     }
//
//     function handleLoad(ref) {
//         setSearchBox(ref);
//     }
//
//     function handlePlacesChanged() {
//         // console.log(searchBox.getPlaces());
//         // console.log(searchBox.getPlaces()[0].name);
//         console.log(searchBox.getPlaces()[0].formatted_address);
//         setAddress1(searchBox.getPlaces()[0].formatted_address);
//         // console.log(searchBox.getPlaces()[0].geometry.location.lat());
//         // console.log(searchBox.getPlaces()[0].geometry.location.lng());
//         const lat = searchBox.getPlaces()[0].geometry.location.lat();
//         const lng = searchBox.getPlaces()[0].geometry.location.lng();
//         setLocation({lat, lng});
//         setZoom(18);
//     }
//
//     const onDragEnd = (e) => {
//         let newPosition = {
//             latitude: e.latLng.lat(),
//             longitude: e.latLng.lng()
//         };
//         setLocation(newPosition);
//     }
//     console.log("위도, 경도 테스트")
//     const locations = location;
//     console.log('위도와 경도')
//     console.log(location)
//     console.log('위도')
//     console.log(locations.latitude)
//     console.log('경도')
//     console.log(locations.longitude)
//     // console.log(location.longitude);
//
//     const inputMap = (e) => {
//         dispatch(maps({address1:address1, latitude: locations.latitude, longitude: locations.longitude}))
//     }
//
//     return (
//         <div>
//         <div className={"d-flex justify-content-center mt-5"}>
//             <LoadScript id="script-loader" googleMapsApiKey={gvar.BEE_API_KEY} libraries={["places"]} zoom={10}>
//                 <StandaloneSearchBox
//                     onLoad={handleLoad}
//                     onPlacesChanged={
//                         handlePlacesChanged
//                     }
//                 >
//                     <input
//                         type="text"
//                         placeholder="주소를 입력하세요"
//                         style={{
//                             boxSizing: `border-box`,
//                             border: `1px solid transparent`,
//                             width: `600px`,
//                             height: `50px`,
//                             padding: `0 12px`,
//                             borderRadius: `10px`,
//                             boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//                             fontSize: `18px`,
//                             outline: `none`,
//                             textOverflow: `ellipses`,
//                             position: "absolute",
//                             // left: "50%",
//                             // marginLeft: "-120px",
//                         }}
//                         onChange={inputAddress}
//                     />
//                 </StandaloneSearchBox>
//
//                 <GoogleMap
//                     // id="searchbox"
//                     mapContainerStyle={mapContainerStyle}
//                     zoom={zoom}
//                     center={location}
//                     options={{styles:styles.hide}}
//                 >
//                     <MarkerF
//                         position={location}
//                         draggable
//                         onDragEnd={onDragEnd}
//                         // onLoad={onMarkerLoad}
//                     />
//                 </GoogleMap>
//
//             </LoadScript>
//
//         </div>
//             {/*<button onClick={inputMap}>다음</button>*/}
//             <Link to ={"/reg/lodgingConcept"}>
//                 <button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>이전</button></Link>
//             <Link to = {"/reg/lodgingLocationDetail"}>
//                 <button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={inputMap}>다음</button></Link>
//         </div>
//     )
//
// }
//
// export default Search;