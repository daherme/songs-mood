import React from "react";
import barMirrorImg from "./album imgs/bar mirror.jpeg";
import birdsImg from "./album imgs/birds.jpg";
import friendsImg from "./album imgs/losing friends.jpg";
import cabRidesImg from "./album imgs/cab rides.jpg";

const SadSongs = {
  song1: {
    title: "Bar Mirror by Benji Davis",
    id: 1,
    albumImg: barMirrorImg,
  },
  song2: {
    title: "Beautiful Birds by Passenger",
    id: 2,
    albumImg: birdsImg,
  },
  song3: {
    title: "I'm Losing Friends by Tanner Swift",
    id: 3,
    albumImg: friendsImg,
  },
  song4: {
    title: "Cab Rides & Cigarettes",
    id: 3,
    albumImg: cabRidesImg,
  },
};

const renderSongs = () => {
  const randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  //   console.log(HappySongs);

  if (randomNum === 0) {
    console.log(SadSongs.song1);
    return (
      <div className="song">
        <h2 className="song-name">{SadSongs.song1.title}</h2>
        <img
          alt="album cover"
          src={SadSongs.song1.albumImg}
          className="album"
        />
      </div>
    );
  } else if (randomNum === 1) {
    console.log(SadSongs.song2);
    return (
      <div className="song">
        <h2 className="song-name">{SadSongs.song2.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={SadSongs.song2.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 2) {
    console.log(SadSongs.song3);
    return (
      <div className="song">
        <h2 className="song-name">{SadSongs.song3.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={SadSongs.song3.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  } else if (randomNum === 3) {
    console.log(SadSongs.song4);
    return (
      <div className="song">
        <h2 className="song-name">{SadSongs.song4.title}</h2>
        <div className="centeredImg">
          <img
            alt="album cover"
            src={SadSongs.song4.albumImg}
            className="album"
          />
        </div>
      </div>
    );
  }
};
class SadContent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="label">Sad Song For You</h2>
        {renderSongs()}
      </div>
    );
  }
}

export default SadContent;
