import React from "react";
import MusicCard from "./MusicCard";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((song) => (
    <MusicCard key={song.id} song={song} />
  ));

  const music = results?.length ? (
    results
  ) : (
    <div>
      <h2>No matching songs</h2>
    </div>
  );
  return <>{music}</>;
};

export default ListPage;
