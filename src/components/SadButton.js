import React from "react";
import SadBtnImg from "../btn imgs/sad.png";

import SadModal from "../Modals/SadModal";

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
        <SadModal
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
          <img src={SadBtnImg} alt="happy button" />
        </button>
      </div>
    );
  }
}

export default Buttons;
