import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import imgone from "./assets/images/image1.jpg"
import imgtwo from "./assets/images/image2.jpg"
import imgthree from "./assets/images/image3.jpg"
import imgfour from "./assets/images/image4.jpg"


const root=ReactDOM.createRoot(document.getElementById("root"))

//images add

function ImageGallery()
{
  return(  <>
  <h1>Gallery</h1>
  <div className="gallery">
      <div className="gal">
        <img src={imgone}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgtwo}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgthree}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgfour}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgone}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgtwo}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgthree}/>
      <h2>Dog Name</h2>
      </div>
      <div className="gal">
        <img src={imgfour}/>
      <h2>Dog Name</h2>
      </div>

  </div>
</>
  );
}

root.render(
  <div>
    <ImageGallery></ImageGallery>
  </div>
)

