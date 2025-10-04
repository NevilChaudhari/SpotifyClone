import { assets } from "../../assets/assets.js";
import { NavLink } from "react-router-dom";
import PlaylistTemplaye from "../playlist/PlaylistTemplate.jsx"
import songs from "../../Songs/songs.js";

function leftBar() {
    const playlistNames = [...new Set(songs.map(song => song.playlist))];
    console.log(playlistNames);

    return (
        <div className="leftBar">
            <div className="head">
                <img src={assets.stack_icon} alt="" className="spotifyIcon" />
                <span>Your Library</span>
                <div className="options">
                    <img src={assets.plus_icon} alt="" className="optionsIcon" />
                    <img src={assets.arrow_icon} alt="" className="optionsIcon" />
                </div>
            </div>

            <div className="tabs">
                <div className="tag">Playlists</div>
                <div className="tag">Artists</div>
                <div className="tag">Albums</div>
                <div className="tag">Podcasts</div>
            </div>

            <div className="filter">
                <img src={assets.search_icon} alt="" className="filterIcon" />
                <div className="recents">
                    <span>Recents</span>
                    <img src={assets.arrow_right} alt="" className="rotate" />
                </div>
            </div>

            <div className="playlists">
                {playlistNames.map((name, index) => {
                    const firstSong = songs.find(song => song.playlist === name);
                    const coverKey = firstSong?.cover || "img1"; // fallback to img1 if undefined
                    const coverImage = assets[coverKey];                   

                    return (
                        <div key={index}>
                            <NavLink to={`/playlist/${name}`}>
                                <PlaylistTemplaye cover={assets['img' + firstSong.cover]} name={name} length={name.length}/>
                            </NavLink>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default leftBar;