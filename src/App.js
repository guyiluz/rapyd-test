import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { getAlbums } from "./Utils";
import Albums from "./components/Albums";
const ALBUMS_SIZE =25
const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const newAlbums = await getAlbums();
        setAlbums(newAlbums.slice(0, ALBUMS_SIZE));
      } catch (error) {
        alert(error)
      }
    };

    fetchAlbums();
  }, []);

  return <div className="App">
    
    <Albums albums={albums}/>
    </div>;
};

export default App;
