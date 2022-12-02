import React from 'react'
import pizza from "./assets/pizza.jpg";
import cross from "./assets/cross.png";
import { useState , useEffect } from 'react';

const App = () => {
  const [imgList, setImgList] = useState([])
  

  // handle upload
  const handleUpload = (e) => {
    const selectedFile = e.target.files  
    const selectedFilesArray = Array.from(selectedFile)

    var imageArray = selectedFilesArray?.map((file) => {
      return URL.createObjectURL(file)
    })

    var tempVal = [];
    
    imgList.forEach(element => {
      tempVal.push({
        url: element,
        type : "image"
      })
    });


    
   
    setImgList((prev) => prev.concat(imageArray))
    
  }


  // handle delete
  const handleDelete = (image) => {
    setImgList( imgList.filter((item) => item !== image))
  }

 const separateObject = obj => {
    const res = [];
   const keys = Object.keys(obj);
    keys.forEach(key => {
       res.push({
         "url": obj[key],
         "image" : "image"
       });
    });
    return res;
 };
//  console.log(separateObject(imgList));

  
  useEffect(() => {
    console.log("imgList ===>", imgList)
  }, [imgList])
  
  
  
  
  return (
    <div>
      <div className="imgUpload">
        <div className="inner">
          <h5>Image Upload</h5> 
          <input name='images' onChange={ handleUpload}  accept="image/png , image/jpeg , image/webp " multiple type="file"   />
        </div>

        <div className="imgSection">

          {imgList && 
            imgList?.map((image) => {
              return (
                <div className="imgContainer">
                <img onClick={() => handleDelete(image)  } src={cross} className="cross" />
                <img src={image}  />          
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