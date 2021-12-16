import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function ResultView(props) {
  console.log("ResultView", props.result);
  const type = props.result.type;

  if (type === "artist") {
    return (
      <div className="main">
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <button
          className="btnInResView"
          onClick={() => props.add(props.result)}
        >
          Add {type} to your list!
        </button>
        <button
          className="btnInResView"
          onClick={() => props.remove(props.result)}
        >
          Remove {type} from your list
        </button>
        <h1>{props.result.name}</h1>
        <div className="resultDivD">
          <img
            className="resultImageD"
            src={props.result.images[0].url}
            alt="artist img"
          />
          <div className="resultTextD">
            This is {props.result.name}. An artist who offers his{" "}
            {props.result.followers.total} unique followers a taste in the{" "}
            {props.result.genres[0]} genre. {props.result.name} has received a
            spotify ranking of {props.result.popularity} based on the artist's
            popularity.
          </div>
        </div>
      </div>
    );
  } else if (type === "track") {
    return (
      <div className="main">
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <button
          className="btnInResView"
          onClick={() => props.add(props.result)}
        >
          Add {type} to your list!
        </button>
        <button
          className="btnInResView"
          onClick={() => props.remove(props.result)}
        >
          Remove {type} from your list
        </button>
        <h1>{props.result.name}</h1>

        <div className="resultDivD">
          <img
            className="resultImageD"
            src={props.result.album.images[0].url}
            alt="album img"
          />
          <div className="resultTextD">
            {props.result.name} is a track from the album{" "}
            {props.result.album.name} released in{" "}
            {props.result.album.release_date} by{" "}
            {props.result.album.artists[0].name}.
            <br />
            <br />
            The track is {(props.result.duration_ms / 60000).toFixed(2)} minutes
            long and can be found on{" "}
            <a href={props.result.external_urls.spotify} target={"_blank"}>
              Spotify
            </a>
          </div>
        </div>
      </div>
    );
  } else if (type === "album") {
    return (
      <div className="main">
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <button
          className="btnInResView"
          onClick={() => props.add(props.result)}
        >
          Add {type} to your list!
        </button>
        <button
          className="btnInResView"
          onClick={() => props.remove(props.result)}
        >
          Remove {type} from your list
        </button>
        <h1>{props.result.name}</h1>

        <div className="resultDivD">
          <img
            className="resultImageD"
            src={props.result.images[0].url}
            alt="album img"
          />
          <div className="resultTextD">
            {props.result.name} is an album by {props.result.artists[0].name}{" "}
            and was released in {props.result.release_date}. The album has{" "}
            {props.result.total_tracks} tracks and can be found on{" "}
            <a href={props.result.external_urls.spotify} target={"_blank"}>
              {" "}
              Spotify{" "}
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <button className="btnInResView">
          <Link to="/callback">Back to main page</Link>
        </button>
        <button
          className="btnInResView"
          onClick={() => props.add(props.result)}
        >
          Add {type} to your list!
        </button>
        <button
          className="btnInResView"
          onClick={() => props.remove(props.result)}
        >
          Remove {type} from your list
        </button>
        <h2>{props.result.name}</h2>
      </div>
    );
  }
}
