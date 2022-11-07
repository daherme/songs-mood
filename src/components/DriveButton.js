import React from "react";
import DriveBtnImg from "../btn imgs/long drives.jpeg";

import DriveModal from "../Modals/DriveModal";

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
        <DriveModal
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
          <img src={DriveBtnImg} alt="happy button" />
        </button>
      </div>
    );
  }
}

export default Buttons;
