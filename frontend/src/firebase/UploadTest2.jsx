// import {useState} from "react";
// import {collection} from "firebase/firestore";
// import {db} from "../dropzone/firebase";
//
// const [selectedImages, setSelectedImages] = useState<string[]>([]);
//
// const addImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.currentTarget.files) {
//         const fileArr = e.currentTarget.files;
//
//         let fileURLs: string[] = [];
//         let file: File;
//         let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
//
//         for (let i = 0; i < filesLength; i++) {
//             let fileReader = new FileReader();
//             file = fileArr[i];
//             fileReader.onload = () => {
//                 fileURLs[i] = fileReader.result as string;
//                 setSelectedImages((prev) => [...fileURLs]);
//             };
//             fileReader.readAsDataURL(file);
//         }
//     }
// };
//
// const postHandler = async () => {
//     setLoading(true);
//     try{
//         const docRef = await addDoc(collection(db, 'posts'), {
//             username: session!.user.username,
//             caption: captionRef.current!.value,
//             profileImg: session?.user.image,
//             timestemp: serverTimestamp()
//     });
//         const imagesArray:string[] = [];
//         await selectedImages.map((image,index) => {
//             const imageRef = ref(storage, `posts/${docRef.id}/image${index}`)
//
//             uploadString(imageRef, image,"data_url").then( async(snapshot:any) => {
//                 const downloadURL =  await getDownloadURL(snapshot.ref)
//                 imagesArray.push(downloadURL)
//                 await updateDoc(doc(db,"posts",docRef.id),{
//                     image: imagesArray
//                 })
//             })
//         })
//     }catch(err){
//         const typedError = err as Error
//         console.error(typedError.message);
//     }finally{
//         setLoading(false);
//     }
// };