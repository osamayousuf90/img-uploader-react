import React from 'react'
import pizza from "./assets/pizza.jpg";
import cross from "./assets/cross.png";
import { useState , useEffect , useRef } from 'react';

const App = () => {
  const [imgList, setImgList] = useState([])
  const inputRef = useRef();
  

  // handle upload
  const handleUpload = (e) => {
  const a = inputRef.current.innerText = "Uploaded"

    const selectedFile = e.target.files 
    const selectedFilesArray = Array.from(selectedFile)

    const imageArray = selectedFilesArray?.map((a) => {
      const file = URL.createObjectURL(a)
      const arrObjImg = { "url": file, type: "image" } 
      const arrObjVideo = { "url": file, type: "video" }
      const b = a["type"].split("/")[0] === "video" ? arrObjVideo : arrObjImg
      return b;
    })

    setImgList(  imgList.concat( imageArray )  )
  }


  // handle delete
  const handleDelete = (image) => {
    setImgList( imgList.filter((item) => item !== image))
  }



  useEffect(() => {
    // console.log("imgList ===>", imgList)
  }, [imgList])
  
  
  
  
  return (
    <div>
      <div className="imgUpload">
        <div className="inner">
          <h5 ref={inputRef} >Image & Video Uploader</h5> 
          <input name='images' onChange={ handleUpload}  accept="image/png , image/jpeg , image/webp , video/mp4 " multiple type="file"   />
        </div>

        <div className="imgSection">

          {imgList && 
            imgList?.map((image) => {
              return (
                <div  className="imgContainer">
                <img onClick={() => handleDelete(image)  } src={cross} className="cross" />
                  {image?.type === "image" && <img src={image?.url} /> } 
                  {image?.type === "video" && 
                    <div className="video">
                    <video
                        autoPlay={true}
                        loop={true}
                    >
                      <source src={image?.url} />
                    </video>
                    </div>
                    
                  } 
                </div> 
              )
            })
          }
          
        </div>
      </div>

      {/* //  setViewImg(URL.createObjectURL(e.target.files[0]))} */}
    </div>
  )
}

export default App