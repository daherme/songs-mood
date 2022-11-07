import React from "react";
import VibesContent from "../VibesContent";

export default class VibesModal extends React.Component {
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
        <VibesContent />
      </div>
    );
  }
}
