import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import AlbumTemplate from "../../features/AlbumTemplate/AlbumTemplate.jsx";
import "./Home.css";

function Home({ songs }) {
    const [songslist, setSongs] = useState(songs);
    const [selectedPlaylist, setSelectedPlaylist] = useState("");

    const playlistNames = [...new Set(songs.map(song => song.playlist))];
    console.log(playlistNames);

    return (
        <div className="Home">
            <div className="homeNavigation">
                <img src={assets.arrow_left} alt="" className="navigationLeftPartIcon" />
                <img src={assets.arrow_right} alt="" className="navigationLeftPartIcon" />
            </div>
            <div className="homeHeader">
                <span className="heroTitle">Good Morning</span>
                <div className="headerPlaylists">
                    <div className="headerPlaylist">
                        <img src={assets.img1} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                    <div className="headerPlaylist">
                        <img src={assets.img2} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                    <div className="headerPlaylist">
                        <img src={assets.img3} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                    <div className="headerPlaylist">
                        <img src={assets.img1} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                    <div className="headerPlaylist">
                        <img src={assets.img2} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                    <div className="headerPlaylist">
                        <img src={assets.img3} alt="" className="headerPlaylistCover" />
                        <span>Playlist Name</span>
                    </div>
                </div>
            </div>
            <div className="albumCont">
                <span className="albumTitle">Recently Played</span>
                <span className="albumExpand">Show all</span>
                <div className="albums">

                    {playlistNames.map((name, index) => {
                        const firstSong = songs.find(song => song.playlist === name);
                        const coverKey = firstSong?.cover || "img1"; // fallback to img1 if undefined
                        const coverImage = assets[coverKey];

                        return (
                            <div key={index}>
                                <Link to={`/playlist/${name}`}>
                                    <AlbumTemplate cover={assets['img' + firstSong.cover]} name={name} />
                                </Link>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default Home;