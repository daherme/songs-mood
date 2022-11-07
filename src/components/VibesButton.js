import React from "react";
import VibesBtnImg from "../btn imgs/good vibes.jpeg";

import VibesModal from "../Modals/VibesModal";

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
        <VibesModal
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
          <img src={VibesBtnImg} alt="happy button" />
        </button>
      </div>
    );
  }
}

export default Buttons;
