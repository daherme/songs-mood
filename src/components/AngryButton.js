import React from "react";
import AngryBtnImg from "../btn imgs/anger.jpeg";

import AngryModal from "../Modals/AngryModal";

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
        <AngryModal
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
          <img src={AngryBtnImg} alt="happy button" />
        </button>
      </div>
    );
  }
}

export default Buttons;
