import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext.jsx";
import React, { useState, useEffect } from "react";

import "./playlist.css";

function Playlist({ songs }) {
    const { id } = useParams();


    const [songslist, setSongs] = useState(songs);
    const [selectedPlaylist, setSelectedPlaylist] = useState("");
    const { setCurrentSong } = usePlayer();

    useEffect(() => {
        const filteredSongs = songs.filter(
            (song) => song.playlist === id
        );

        setSelectedPlaylist(id);
        setSongs(filteredSongs);

        console.log("Filtered Songs:", filteredSongs);
    }, [id, songs]);

    return (
        <div className="AlbumPage">
            <div className="pageNavigation">
                <Link to="/"><img src={assets.arrow_left} alt="" className="navigationLeftPartIcon" /></Link>
                {/* <img src={assets.arrow_right} alt="" className="navigationLeftPartIcon" /> */}
            </div>

            <div className="pageHeader">
                <img src={assets.img3} alt="" className="albumCover" />
                <div className="albumDetails">
                    <span className="albumtitle">{id}</span>
                    <span className="albumDesc">{id} Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, debitis. Veniam odio mollitia vel delectus.</span>
                </div>
            </div>

            <div className="song-list">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songslist.map((song, index) => (
                            <tr key={song.id} className="songs" onClick={() => setCurrentSong(song)}>
                                <td>{index + 1}</td>
                                <td className="songTitle">
                                    <img src={assets['img' + song.cover]} alt={song.name} />
                                    {song.name}
                                </td>
                                <td>{song.artist}</td>
                                <td>{song.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Playlist;