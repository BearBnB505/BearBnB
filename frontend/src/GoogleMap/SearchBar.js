import SearchBox from "./SearchBox";
import React from "react";

// export class SearchBar extends React.Component{
//     render(){
//         return (
//             <div className="searchBar">
//                 <div id="mainLogo">
//                     {/*<img*/}
//                     {/*    src="/logo.png"*/}
//                     {/*    alt="place-now logo"*/}
//                     {/*/>*/}
//                 </div>
//                 <SearchBox
//                     map={props.map}
//                     mapApi={props.mapApi}
//                 />
//                 {/*<Category/>*/}
//             </div>
//         )
//     }
// }

export function SearchBar(props) {
    return (
        <div className="searchBar">
            <div id="mainLogo">
                {/*<img*/}
                {/*    src="/logo.png"*/}
                {/*    alt="place-now logo"*/}
                {/*/>*/}
            </div>
            <SearchBox
                map={props.map}
                mapApi={props.mapApi}
            />
            {/*<Category/>*/}
        </div>
    )
}