const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const ALBUM_IMAGES_URL = id =>
  `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
export const getData = url => {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      if (res.ok) {
        res.json().then(data => resolve(data));
      } else {
        reject(new Error("request failed"));
      }
    });
  });
};

export const getAlbums = () => getData(ALBUMS_URL);
export const fetchAlbumImages = id => {
  const url = ALBUM_IMAGES_URL(id);
  return getData(url);
};
