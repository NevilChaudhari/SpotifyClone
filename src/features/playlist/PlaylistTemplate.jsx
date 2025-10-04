import { assets } from "../../assets/assets.js";

function PlaylistTemplate({name, cover, length}) {
  return (
    <div className="playlist">
      <img src={cover} alt="" className="playlistCover" />
      <div className="playlistdetails">
        <span className="playlistTitle">{name}</span>
        <span className="playlistdetail">Playlist ● {length} Songs</span>
      </div>
    </div>
  );
}

export default PlaylistTemplate;