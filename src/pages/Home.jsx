import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Import navbar component
import loadingGif from "../assets/Dual Ball-1.2s-200px.svg"; // Import loading svg animation
import ListPage from "../components/ListPage";

const Home = () => {
  const endpoint = "https://robo-music-api.onrender.com/music/my-api"; // API endpoint
  const [data, setData] = useState([]); // State to store song data
  const [isLoading, setIsLoading] = useState(true); // State for page loading
  const [searchResults, setSearchResults] = useState([]); // State to store search results

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
        setSearchResults(response.data);
        setIsLoading(false); // Remove loading gif
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="home-body">
        <Navbar data={data} setSearchResults={setSearchResults} />
        <div className="music-list pt-3 pt-md-5 pb-4">
          {isLoading ? (
            // Display loading gif
            <img src={loadingGif} alt="Loading svg animation" />
          ) : (
            <ListPage searchResults={searchResults} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
