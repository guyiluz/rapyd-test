import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { fetchAlbumImages } from "../../Utils";
import ReactTooltip from 'react-tooltip'
 const Image =styled.img`
 height: 80px; 
 width: 80px; 
 object-fit: contain
 `
const ClosingImage =styled.div`
position: relative;
    top: 19%;
    left: 80%;



`

const  AlbumImagesGallery =({imgSrc,id,popImage,title,handleFullImg})=>{


return (<div >
    <ClosingImage  id={id}  onClick={(e)=>popImage(e.target.id)} >X</ClosingImage>
 <Image  id={imgSrc} data-tip={title} onClick={(e)=>handleFullImg(e.target.id)}  src={imgSrc}/>  
 

 <ReactTooltip />


</div>

)


}


export default AlbumImagesGallery;