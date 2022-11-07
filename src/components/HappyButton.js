import React from "react";
import HappyBtnImg from "../btn imgs/happy.png";
// import DriveBtnImg from "../btn imgs/long drives.jpeg";
// import SadBtnImg from "../btn imgs/sad.png";
// import AngryBtnImg from "../btn imgs/anger.jpeg";
// import VibesBtnImg from "../btn imgs/good vibes.jpeg";
// import LoveBtnImg from "../btn imgs/love.webp";

import HappyModal from "../Modals/HappyModal";

class Buttons extends React.Component {
  state = {
    show: false,
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    return (
      <div>
        <HappyModal
          className="hidden-song"
          onClose={this.showModal}
          show={this.state.show}
        />
        <button
          className="open-happy"
          onClick={(e) => {
            this.showModal(e);
          }}
        >
          <img src={HappyBtnImg} alt="happy button" />
        </button>
      </div>
    );
  }
}

export default Buttons;
