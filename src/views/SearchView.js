import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SearchFormView(props) {
  return (
    <span className={props.loginStatus ? "search" : "hidden"}>
      <input
        type="text"
        placeholder="Search..."
        className="searchArtist"
        onInput={(text) => props.setQuery(text.target.value)}
        onKeyDown={(key) => {
          if (key.keyCode === 13) {
            props.onSearch();
          }
        }}
      />

      <select
        className="searchSelect"
        onChange={(event) => {
          props.setType(event.target.value);
        }}
      >
        {props.options.map((giveOptions) => (
          <option value={giveOptions.value} key={giveOptions}>
            {giveOptions}
          </option>
        ))}
      </select>

      <Link
        to="/search"
        type="button"
        className="searchBtn"
        role="button"
        onClick={() => {
          props.onSearch();
        }}
      >
        Search!
      </Link>
    </span>
  );
}

export function SearchResultsView(props) {
  function getData() {
    if (props.searchType === "Album") {
      return props.searchResults.albums.items;
    } else if (props.searchType === "Track") {
      return props.searchResults.tracks.items;
    } else {
      return props.searchResults.artists.items;
    }
  }

  if (props.searchType === "Track") {
    return (
      <div>
        <h1>Search Results!</h1>
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <div className="searchResults">
          {getData().map((results) => {
            return (
              <Link
                to="/details"
                key={results.id}
                onClick={() => props.setSearch(results)}
              >
                <span key={results.id} className="result">
                  <Card className="cards" sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={results.album.images[0].url}
                        alt="artist img"
                      />
                      <CardContent className="cardCont">
                        <Typography gutterBottom variant="h5" component="div">
                          {results.name}
                        </Typography>
                      </CardContent>
                    </Card>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Search Results!</h1>
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <div className="searchResults">
          {getData().map((results) => {
            var imgsrc = "";
            if (results.images.length > 0) {
              imgsrc = results.images[0].url;
            } else {
              imgsrc =
                "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
            }

            if (props.searchType === "Album") {
              return (
                <Link
                  to="/details"
                  key={results.id}
                  onClick={() => props.setSearch(results)}
                >
                  <span key={results.id} className="result">
				  <Card className="cards" sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={imgsrc}
                        alt="artist img"
                      />
                      <CardContent className="cardCont">
                        <Typography gutterBottom variant="h5" component="div">
                          {results.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </span>
                </Link>
              );
            } else {
              return (
                <Link
                  to="/details"
                  key={results.id}
                  onClick={() => props.setSearch(results)}
                >
                  <span key={results.id} className="result">
                    <Card className="cards" sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={imgsrc}
                        alt="artist img"
                      />
                      <CardContent className="cardCont">
                        <Typography gutterBottom variant="h5" component="div">
                          {results.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </span>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  }
}