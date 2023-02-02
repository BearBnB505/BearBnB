import React, {useEffect, useState} from 'react';
import {collection,onSnapshot, orderBy, query} from "firebase/firestore"
import {db} from "../dropzone/firebase"
import moment from "moment";
// import Image from 'next/image';


const Posts = () => {
    const [posts, setPosts] = useState([])
    const postImages = (post) => {
        const post_images = post.images?.map(file=>(
            <div className={"relative w-full"}>
                <img src={file} layout="fill" objectFit='cover'></img>
            </div>
        ))
        return post_images
    }
    useEffect(() => {
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, orderBy("timestamp", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapShot) => {
            setPosts(querySnapShot.docs.map(doc => ({
                ...doc.data(), id: doc.id,
                timestamp: doc.data().timestamp?.toDate().getTime()
            })))
        });
        return unsubscribe
    }, [])
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>
                    <div className={'text-lg'}>{post.caption}</div>
                    <div className={"flex space-x-3"}>
                        {postImages(post)}
                    </div>
                    <p>{moment(post.timestamp).fromNow()}</p>
                </div>)
            }
        </div>
    )
}



export default Posts;