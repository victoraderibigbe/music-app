import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../components/MusicCard"; // Import music card component
import Navbar from "../components/Navbar"; // Import navbar component
import loadingGif from "../assets/Dual Ball-1.2s-200px.svg"; // Import loading svg animation

const Home = () => {
  const endpoint = "https://robo-music-api.onrender.com/music/my-api"; // Define API endpoint
  const [data, setData] = useState([]); // Set state for song data
  const [isLoading, setIsLoading] = useState(true); // Set state for page loading

  // Call fetchData function onload of the page
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API endpoint
  const fetchData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLoading(false); // Remove loading gif
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="home-body">
        <Navbar />
        <div className="music-list pt-2 pt-md-4 pb-4">
          {isLoading ? (
            // Display loading gif
            <img src={loadingGif} alt="Loading svg animation" />
          ) : (
            // Iterate through the data array and return each item
            data.map((song) => (
              <div key={song.id}>
                // Mount music card component and pass props for song data
                <MusicCard
                  title={song.songTitle}
                  artist={song.artistName}
                  album={song.albumName}
                  coverImage={song.songImage}
                  audioSrc={song.songUrl}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
