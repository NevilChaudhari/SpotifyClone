import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/HomePage/Home.jsx";
import Playlist from "../Pages/PlaylistPage/Playlist.jsx";
import songs from "../Songs/songs.js";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home songs={songs}/> },
      { path: "/playlist/:id", element: <Playlist songs={songs}/> },
    ],
  },
]);

export default router;