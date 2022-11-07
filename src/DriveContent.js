import React from "react";
import threeWwImg from "./album imgs/three WW.jpg";
import banditosImg from "./album imgs/banditos.jpg";
import downfallImg from "./album imgs/downfall.jpeg";
import scorchoImg from "./album imgs/el scorcho.jpeg";

const DriveSongs = {
  song1: {
    title: "3WW by Alt-J",
    id: 1,
    albumImg: threeWwImg,
  },
  song2: {
    title: "Banditos by The Refreshments",
    id: 2,
    albumImg: banditosImg,
  },
  song3: {
    title: "Downfall of Us All by A Day to Remember",
    id: 3,
    albumImg: downfallImg,
  },
  song4: {
    title: "El Scorcho by Weezer",
    id: 3,
    albumImg: scorchoImg,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(DriveSongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{DriveSongs.song1.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={DriveSongs.song1.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 1) {
    console.log(DriveSongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{DriveSongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={DriveSongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(DriveSongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{DriveSongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={DriveSongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(DriveSongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{DriveSongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={DriveSongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class DriveContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Driving Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default DriveContent;
