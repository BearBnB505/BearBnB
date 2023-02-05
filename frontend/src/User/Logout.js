// import {useEffect} from "react";
// import {useNavigate} from "react-router";
// import {useDispatch, useSelector} from "react-redux";
// import {Link} from "react-router-dom";
//
// import {getCookieToken, removeCookieToken} from "../Storage/Cookie";
// import {DELETE_TOKEN} from "../Store/Auth";
// import {logoutUser} from "../Api/Users"
//
// function Logout() {
//
//     // store에 저장된 Access Token 정보 받아옴
//     const {accessToken} = useSelector(state => state.token);
//
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//
//     const refreshToken = getCookieToken();
//
//     async function logout() {
//         // 백으로부터 받은 응답
//         const data = await logoutUser({refresh_token: refreshToken}, accessToken);
//
//         if (data.status) {
//             dispatch(DELETE_TOKEN());
//             removeCookieToken();
//             return navigate('/');
//         } else {
//             window.location.reload();
//         }
//     }
//
//     useEffect(() => {
//         logout();
//     }, [])
//
//     return (
//         <>
//             <Link to={"/"} />
//         </>
//     );
// }
//
// export default Logout;