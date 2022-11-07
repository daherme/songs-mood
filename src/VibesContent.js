import React from "react";
import getBetterImg from "./album imgs/get better.jpeg";
import mammamiaImg from "./album imgs/mammamia.jpg";
import rosesImg from "./album imgs/roses.jpeg";
import recklessImg from "./album imgs/reckless.jpeg";

const VibesSongs = {
  song1: {
    title: "I Wanna Get Better by Bleachers",
    id: 1,
    albumImg: getBetterImg,
  },
  song2: {
    title: "MAMMAMIA by Maneskin",
    id: 2,
    albumImg: mammamiaImg,
  },
  song3: {
    title: "Roses by Benny Blanco",
    id: 3,
    albumImg: rosesImg,
  },
  song4: {
    title: "Reckless Serenade by Arctic Monkeys",
    id: 3,
    albumImg: recklessImg,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(VibesSongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{VibesSongs.song1.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={VibesSongs.song1.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 1) {
    console.log(VibesSongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{VibesSongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={VibesSongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(VibesSongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{VibesSongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={VibesSongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(VibesSongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{VibesSongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={VibesSongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class VibesContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Good Vibes Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default VibesContent;
