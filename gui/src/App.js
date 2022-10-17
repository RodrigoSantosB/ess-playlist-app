import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import PlaylistHeader from "./components/playlistHeader/playlistHeader";
import Playlist from "./components/PlaylistPage/PlaylistPage";
import Navbar from "./components/Navbar/navbar.jsx";
import ShowList from "./components/ShowList/ShowList.jsx";
import Player from "./components/Player/Player.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Carousel, { CarouselItem } from "./components/carousel/Carousel";

library.add(fab, fas);

function App() {
  localStorage.setItem("accountID", 1);

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route element={<ShowList></ShowList>} path="/"></Route>
          <Route element={<Playlist></Playlist>} path="/PlaylistPage"></Route>
        </Routes>
      </BrowserRouter>
      <Player/>
    </div>
  );
}

export default App;
