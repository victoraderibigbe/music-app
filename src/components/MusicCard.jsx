import React from "react";
import "../components/MusicCard.css"; // Import MusicCard component

const MusicCard = ({ title, artist, album, coverImage, audioSrc }) => {

  return (
    <div className="music-card shadow-sm p-2 rounded">
      <div className="image-container">
        <img className="cover-image" src={coverImage} alt={`${title} Cover`} />
        <div className="overlay"></div>
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{artist}</p>
        <p>{album}</p>
        <audio
          className="w-100 music-audio"
          controls
        >
          {/* Specify sources for the audio element to allow browser choose
          the most suitable format to play.
          Also display a fallback message in browser that do not support the audio element. */}
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicCard;
