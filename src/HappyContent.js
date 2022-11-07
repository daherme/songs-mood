import React from "react";
import chateau from "./album imgs/chateau.png";
import bodyTalks from "./album imgs/body talks.jpeg";
import notYourFault from "./album imgs/not your fault.jpeg";
import heyWeOk from "./album imgs/hey we ok.jpeg";

const HappySongs = {
  song1: {
    title: "Chateau by Blackbear",
    id: 1,
    albumImg: chateau,
  },
  song2: {
    title: "Body Talks by the Struts",
    id: 2,
    albumImg: bodyTalks,
  },
  song3: {
    title: "Not Your Fault by AWOLNATION",
    id: 3,
    albumImg: notYourFault,
  },
  song4: {
    title: "Hey! We Ok by Never Shout Never",
    id: 3,
    albumImg: heyWeOk,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(HappySongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{HappySongs.song1.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={HappySongs.song1.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 1) {
    console.log(HappySongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{HappySongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={HappySongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(HappySongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{HappySongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={HappySongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(HappySongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{HappySongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={HappySongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class HappyContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Happy Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default HappyContent;
