import { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";
import { createResource as fetchData } from "./helper";
import { useEffect, useState, Suspense } from "react";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Suspense fallback={<h1>Loading...</h1>}>
        // <Gallery data={data} />
      </Suspense>
    </div>
  );
}

const renderGallery = () => {
  if (data) {
    return (
      <Suspense fallback={<Spinner />}>
        <Gallery data={data} />
      </Suspense>
    );
  }
};

export default App;
