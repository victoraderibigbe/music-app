import React from "react";

const Navbar = ({ data, setSearchResults }) => {
  
  const handleSearchChange = (e) => {
    const searchInput = e.target.value.toLowerCase(); // Convert input to lowercase
  
    if (searchInput !== '') {
      const filteredData = data.filter((result) => {
        const songTitle = result.songTitle.toLowerCase();
        const albumName = result.albumName.toLowerCase();
        const artistName = result.artistName.toLowerCase();
        const combinedText = `${songTitle} ${albumName} ${artistName}`;
  
        return combinedText.includes(searchInput);
      });
  
      setSearchResults(filteredData);
    } else {
      setSearchResults(data); // Show all results if the search input is empty
    }
  };

  return (
    <>
      <nav className="navbar px-0 px-md-5 py-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 fw-bold fst-italic">BytesNovaBeats</a>
          <form className="d-flex search-form p-2">
            <input
              className="me-2 search-input"
              type="search"
              placeholder="Search by song, artist, album..."
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
