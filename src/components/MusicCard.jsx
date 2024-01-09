import React from "react";
import "../components/MusicCard.css"; // Import MusicCard component

const MusicCard = ({ song }) => {
  return (
    <div className="music-card shadow-sm p-2 rounded">
      <div className="image-container">
        <img
          className="cover-image"
          src={song.songImage}
          alt={`${song.songTitle} Cover`}
        />
        <div className="overlay"></div>
      </div>
      <div className="details">
        <h2>{song.songTitle}</h2>
        <p>{song.artistName}</p>
        <p>{song.albumName}</p>
        <audio className="w-100 music-audio" controls>
          {/* Specify sources for the audio element to allow browser choose
          the most suitable format to play.
          Also display a fallback message in browser that do not support the audio element. */}
          <source src={song.songUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicCard;
