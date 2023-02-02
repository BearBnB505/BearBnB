// import React, {useState} from 'react';
// import {useDropzone} from 'react-dropzone';
// import {storage} from "./firebase2";
//
// const [image, setImage] = useState([]);
// const [imageUrl, setImageUrl] = useState([]);
// const [error, setError] = useState("");
//
// function DropzoneBasic(props) {
//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
//
//     const files = acceptedFiles.map(file => (
//         <li key={file.path}>
//             {file.path} - {file.size} bytes
//         </li>
//     ));
//
//     console.log(files);
//
//     const onSubmit = (event) => {
//         event.preventDefault();
//         setError("");
//         if (image === "") {
//             console.log("파일이 선택되지 않았습니다");
//             setError("파일이 선택되지 않았습니다");
//             return;
//         }
//         // 업로드 처리
//         console.log("업로드 처리");
//         const storageRef = storage.ref("BearBnB/"); //어떤 폴더 아래에 넣을지 설정
//         const imagesRef = storageRef.child(image.name); //파일명
//
//         console.log("파일을 업로드하는 행위");
//         const upLoadTask = imagesRef.put(image);
//         console.log("태스크 실행 전");
//
//         upLoadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 console.log("snapshot", snapshot);
//                 const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//
//             },
//             (error) => {
//                 console.log("err", error);
//                 setError("파일 업로드에 실패했습니다." + error);
//                 setProgress(100); //진행중인 바를 삭제
//             },
//             () => {
//                 upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//                     console.log("File available at", downloadURL);
//                     setImageUrl(downloadURL);
//                 });
//             }
//         );
//     };
//
//     const handleImage = (event) => {
//         const image = event.target.files[0];
//         setImage(image);
//         console.log(image);
//         setError("");
//     };
//
//
//     return (
//         <section className="container">
//             <div {...getRootProps({className: 'dropzone'})}>
//                 <input {...getInputProps()} />
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//             </div>
//             <aside>
//                 <h4>Files</h4>
//                 <ul>{files}</ul>
//                 <button onClick={onSubmit}>업로드 드랍존</button>
//             </aside>
//         </section>
//     );
// }
//
//
//
// export default DropzoneBasic;