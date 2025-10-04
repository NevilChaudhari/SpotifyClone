import { assets } from "../../assets/assets.js";

function AlbumTemplate({name, cover}) {
    return (
        <div className="album">
            <img src={cover} alt="" className="albumCover" />
            <span className="albumsName">{name}</span>
            <span className="albumsOwnerName">Owner Name</span>
        </div>
    );
}

export default AlbumTemplate;