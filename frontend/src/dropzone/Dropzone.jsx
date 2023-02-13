import React, {useCallback, useRef, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import {db, storage} from '../dropzone/firebase';
import {addDoc, collection, serverTimestamp, updateDoc, arrayUnion,doc} from "firebase/firestore"
import {ref, getDownloadURL, uploadBytes} from "@firebase/storage"

const Dropzone = () => {
    const [selectImages, setSelectImages] = useState([]);
    const captionRef = useRef(null);
    // console.log('db', db)
    // console.log('storage', storage)
    const uploadPost = async () =>{
        const docRef = await addDoc(collection(db, "posts"),{
            caption : captionRef.current.value,
            timestamp : serverTimestamp()
        })
        await Promise.all(
            selectImages.map(image => {
                const imageRef = ref(storage, `posts/${docRef.id}/${image.path}`);
                uploadBytes(imageRef, image, "data_url").then(async ()=>{
                    const downloadURL = await getDownloadURL(imageRef)
                    await updateDoc(doc(db,"posts",docRef.id),{
                        images: arrayUnion(downloadURL)
                    })
                })
            })
        )
        captionRef.current.value=''
        setSelectImages([])
    }

    const onDrop = useCallback(acceptedFiles => {
        setSelectImages(acceptedFiles.map(file=>
            Object.assign(file,{
                preview:URL.createObjectURL(file)
            })
        ))
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
    const selected_images = selectImages?.map(file=>(
        <div>
            <img src={file.preview} style={{width:"200px"}} alt=""/>
        </div>
    ))
    return(
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <p>Drop the files here ...</p> :


            </div>
            <input ref={captionRef} type={'text'} placeholder='Enter a caption'/>
            <button onClick={uploadPost}>post</button>
            {selected_images}
        </div>
    )
}

export default Dropzone;