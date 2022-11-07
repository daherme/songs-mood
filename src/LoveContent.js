import React from "react";
import anythingImg from "./album imgs/anything for you.jpeg";
import rebelImg from "./album imgs/rebel love song.jpeg";
import fireImg from "./album imgs/fire up the night.jpeg";
import aroundImg from "./album imgs/when your around.jpg";

const LoveSongs = {
  song1: {
    title: "Anything for You by Ludo",
    id: 1,
    albumImg: anythingImg,
  },
  song2: {
    title: "Rebel Love Song by Black Veil Brides",
    id: 2,
    albumImg: rebelImg,
  },
  song3: {
    title: "Fire Up the Night by New Medicine",
    id: 3,
    albumImg: fireImg,
  },
  song4: {
    title: "When You're around by Not My Weekend",
    id: 3,
    albumImg: aroundImg,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(LoveSongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{LoveSongs.song1.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={LoveSongs.song1.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 1) {
    console.log(LoveSongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{LoveSongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={LoveSongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(LoveSongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{LoveSongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={LoveSongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(LoveSongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{LoveSongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={LoveSongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class LoveContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Love Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default LoveContent;
