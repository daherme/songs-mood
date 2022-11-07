import React from "react";
import fedUpImg from "./album imgs/fed up.jpeg";
import obeyImg from "./album imgs/obey.jpeg";
import stopImg from "./album imgs/stop.jpeg";
import cutImg from "./album imgs/cut losses.jpg";

const AngrySongs = {
  song1: {
    title: "Fed Up by Beartooth",
    id: 1,
    albumImg: fedUpImg,
  },
  song2: {
    title: "Obey by Yungblud",
    id: 2,
    albumImg: obeyImg,
  },
  song3: {
    title: "Stop by Silverstein",
    id: 3,
    albumImg: stopImg,
  },
  song4: {
    title: "Cut My Losses by Heart Attack Man",
    id: 3,
    albumImg: cutImg,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(AngrySongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{AngrySongs.song1.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={AngrySongs.song1.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 1) {
    console.log(AngrySongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{AngrySongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={AngrySongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(AngrySongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{AngrySongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={AngrySongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(AngrySongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{AngrySongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={AngrySongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class AngryContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Angry Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default AngryContent;
