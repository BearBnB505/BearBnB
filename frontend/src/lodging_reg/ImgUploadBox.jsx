import { useState,useEffect,useRef } from 'react';
function ImgUploadBox() {

    const [rawImages, setRawImages] = useState([])
    const [rawPreviews, setRawPreviews] = useState([])
    const [filteredPreviews, setFilteredPreviews] = useState([])
    const canvasRef = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0]
        if(!isValidFile(file)){
            alert("is not valid file")
            return
        }
        addRawImages(file)
        addRawPreviews(file)
    }

    const addRawImages = (file) => {
        setRawImages([...rawImages, file])
    }

    const addRawPreviews = (file) => {
        setRawPreviews([...rawPreviews, URL.createObjectURL(file)])
    }


    const isValidFile = (file)=>{
        // todo file validation
        return true
    }


    useEffect(() => {
        // free memory when ever this component is unmounted
        if(rawPreviews != null){
            return () => rawPreviews.forEach(rp=>URL.revokeObjectURL(rp))
        }
    }, [rawPreviews])


    const createFilteredImage = async (e, imagePath) =>{

        const image = e.target
        const ctx = canvasRef.current.getContext('2d')
        // ctx.drawImage(image, 0, 0, image.width * .6, image.height * .6);
        // ctx.drawImage(imagePath, 0,0, )


        // filter
        ctx.width = image.width;
        ctx.height = image.height;
        ctx.filter = 'grayscale(1)';
        ctx.drawImage(image, 0, 0, image.width, image.height);

        // save
        const dataURL = canvasRef.current.toDataURL();
        setFilteredPreviews([...filteredPreviews, dataURL])
    }

    const FileInputView = ()=>{
        return <input type="file" onChange={handleFileInput} accept=".jpg, .jpeg, .png"></input>
    }

    const RawImagesView = ()=>{
        return <div className='imageCon'>
            {  rawPreviews.map((item, idx) => <div key={"raw"+idx}><img src={item} alt="not valid" onClick={(e,item)=>createFilteredImage(e,item)}/></div>)}
        </div>
    }

    const FilteredImagesView = ()=>{
        return <div className='imageCon'>
            {  filteredPreviews.map((item, idx) => <div key={"ftr"+idx}><img src={item} alt="not valid" /></div>)}
        </div>
    }

    const MyCanvas = ()=>{
        return <canvas ref={canvasRef} style={{display:'none'}}></canvas>
    }


    return (
        <div className="App">
            <FileInputView />
            <RawImagesView />
            <FilteredImagesView />
            <MyCanvas />
        </div>
    );
}

export default ImgUploadBox;