// // import React from "react";
// // import {GoogleMap, LoadScript, StandaloneSearchBox, useJsApiLoader} from "@react-google-maps/api";
// import * as gvar from "./global_variables";
// //
// // function SearchMap(props) {
// //
// //     const {isLoaded} = useJsApiLoader({
// //         id: 'google-map-script',
// //         googleMapsApiKey: gvar.BEE_API_KEY
// //     });
// //
// //     const mapContainerStyle = {
// //         height: "400px",
// //         width: "800px"
// //     };
// //
// //     const center = {
// //         lat: 38.685,
// //         lng: -115.234
// //     };
// //
// //     const onLoad = ref => this.searchBox = ref;
// //
// //     const onPlacesChanged = () => console.log(this.searchBox.getPlaces());
// //
// //
// //     return isLoaded ? (
// //         <div>
// //             <div>
// //                 <LoadScript googleMapsApiKey={gvar.BEE_API_KEY} >
// //                     {/*<GoogleMap*/}
// //                     {/*    mapContainerStyle={mapContainerStyle}*/}
// //                     {/*    zoom={2.5}*/}
// //                     {/*    center={center}*/}
// //                     {/*    bootstrapURLKeys={{*/}
// //                     {/*        libraries: 'places' }}*/}
// //                     {/*>*/}
// //                         <StandaloneSearchBox
// //                             onLoad={onLoad}
// //                             onPlacesChanged={
// //                                 onPlacesChanged
// //                             }
// //                         >
// //                             <input
// //                                 type="text"
// //                                 placeholder="Customized your placeholder"
// //                                 style={{
// //                                     boxSizing: `border-box`,
// //                                     border: `1px solid transparent`,
// //                                     width: `240px`,
// //                                     height: `32px`,
// //                                     // padding: `0 12px`,
// //                                     borderRadius: `3px`,
// //                                     boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
// //                                     fontSize: `14px`,
// //                                     // outline: `none`,
// //                                     outline: "black",
// //                                     // textOverflow: `ellipses`,
// //                                     // position: "absolute",
// //                                     // left: "50%",
// //                                     // marginLeft: "-120px"
// //                                 }}
// //                             />
// //                         </StandaloneSearchBox>
// //                     {/*</GoogleMap>*/}
// //                 </LoadScript>
// //             </div>
// //         </div>
// //     ) : <></>
// // }
// //
// // export default SearchMap;
//
// import React, {useState } from 'react';
// import GoogleMap from 'google-map-react';
// // import './App.css';
// import {SearchBar} from "./SearchBar";
//
//
// const SearchMap = props => {
//     // state 설정 및 초기화
//     const [apiReady, setApiReady] = useState(false);
//     const [map, setMap] = useState(null);
//     const [googlemaps, setGooglemaps] = useState(null);
//     const [center, setCenter] = useState({ lat: 37.5, lng: 127 });
//     let zoom = 10;
//
//     if(window.screen.width >= 768){
//         zoom = 15;
//     }
//
//
//     const handleApiLoaded = (map, maps) => {
//         // map과 maps 개체가 로드됐다면, 각각의 state값에 넣어준다
//         if (map && maps) {
//             setApiReady(true);
//             setMap(map);
//             setGooglemaps(maps);
//         }
//     };
//
//     return (
//         <div style={{ height: '100vh'}}>
//             {apiReady && googlemaps && (
//                 <SearchBar map={map}
//                            mapApi={googlemaps}/>)}
//             <div className = "googleMap">
//                 {/*<GoogleMap*/}
//                 {/*    bootstrapURLKeys={{*/}
//                 {/*        key: gvar.BEE_API_KEY,*/}
//                 {/*        libraries: 'places', }}*/}
//                 {/*    defaultCenter={center}*/}
//                 {/*    defaultZoom={zoom}*/}
//                 {/*    yesIWantToUseGoogleMapApiInternals*/}
//                 {/*    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}*/}
//                 {/*    >*/}
//                 {/*</GoogleMap>*/}
//             </div>
//         </div>
//     )
// }
//
// export default SearchMap;