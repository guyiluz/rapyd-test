import React, { useEffect, useState } from "react";
import SingleAlbum from "../SingleAlbum"

import styled from "styled-components"
 const AlbumsConstrainer =styled.div`
 display: flex;
 flex-wrap: wrap;
justify-content: space-evenly;
 padding: 25px;
 `




const  Albums =({albums})=>{


const renderAlbums=()=>{

   if(albums.length){
    return  albums.map((album)=>{
         const {title,id}= album
         return <SingleAlbum id={id} title={title}/>
         
      
         })
   }
  
}


return (<AlbumsConstrainer>

   {renderAlbums()}
</AlbumsConstrainer>)


}


export default Albums;