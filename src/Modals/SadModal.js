import React from "react";
import SadContent from "../SadContent";

export default class SadModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="wrap">
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
        <SadContent />
      </div>
    );
  }
}
