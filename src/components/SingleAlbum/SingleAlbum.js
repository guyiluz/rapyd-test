import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAlbumImages } from "../../Utils";
import AlbumImagesGallery from "../AlbumImagesGallery";
const SingleAlbumConstrainer = styled.div`
 width: 350px;
 height: ${props => (props.expend == true ? "520px" : "250px")} 
 display: flex;
 justify-content: inherit;
 flex-direction: column;
 margin-bottom: 25px;
 align-items: center;
 border: 1px solid #000000b0;
 padding: 15px;
}
 `;

const GalleryConstrainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-auto-flow: row;
  grid-gap: 6px;
`;

const ClosingImage = styled.div`
  position: relative;
  top: 19%;
  left: 80%;
`;

const FullImage = styled.div`
  position: relative;
  */font-size: 25px;
  align-self: center;
`;

const Button =styled.button`
width: 80%;
    align-self: center;
    background: #002483;
    font-size: 18px;
    color: #fff;
    margin-top: 15px;
    margin-bottom: 30px;
`

const SingleAlbum = ({ id, title }) => {
  const [albumImages, setAlbumImages] = useState([]);
  const [showImages, toggleShowImages] = useState(false);
  const [showFullImg, toggleShowFullImg] = useState(false);
  const [fullImgSrc, setFullImgSrc] = useState("");

  const getAlbumImages = async e => {
    if (showImages) {
      setAlbumImages([]);
      return toggleShowImages(false);
    }

    const albumId = e.target.name;
    try {
      const newAlbums = await fetchAlbumImages(albumId);
      setAlbumImages(newAlbums.slice(0, 12));
      toggleShowFullImg(false);
      toggleShowImages(true);
    } catch (error) {
      alert(error);
    }
  };

  const popImage = id => {
    setAlbumImages(albumImages.filter(i => i.id != id));
    renderAlbumImages();
  };

  const renderAlbumImages = () => {
    const AlbumImagesComponents = albumImages.map((albumImg, index) => (
      <AlbumImagesGallery
        key={index}
        imgSrc={albumImg.thumbnailUrl}
        popImage={popImage}
        title={albumImg.title}
        id={albumImg.id}
        handleFullImg={handleFullImg}
      />
    ));
    return AlbumImagesComponents;
  };

  const handleFullImg = src => {
    toggleShowImages(false);
    toggleShowFullImg(true);

    setFullImgSrc(src);
  };

  const handleCloseFullImg = () => {
    toggleShowFullImg(false);
    toggleShowImages(true);

    setFullImgSrc("");
  };
  return (
    <SingleAlbumConstrainer expend={showImages || showFullImg}>
       <div>
       <h3>Album title:</h3>
  <p>{title}</p>
      <h5>id</h5>
      <p>{id}</p>
       </div>

      {showImages && (
        <GalleryConstrainer>{renderAlbumImages()}</GalleryConstrainer>
      )}

      {showFullImg && (
        <FullImage>
          <ClosingImage onClick={handleCloseFullImg}>x</ClosingImage>
          <img src={fullImgSrc} />
        </FullImage>
      )}
      <Button onClick={getAlbumImages} name={id}>
        {albumImages.length ? "Hide" : "Show"}
      </Button>
    </SingleAlbumConstrainer>
  );
};

export default SingleAlbum;
