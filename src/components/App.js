import React from "react";
import Header from "./Header";
import HappyButton from "./HappyButton";
import AngryButton from "./AngryButton";
import DriveButton from "./DriveButton";
import SadButton from "./SadButton";
import LoveButton from "./LoveButton";
import VibesButton from "./VibesButton";

class App extends React.Component {
  // state = {
  //   show: false,
  // };

  // showModal = (e) => {
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };

  // onClose = (e) => {
  //   this.props.onClose && this.props.onClose(e);
  // };

  render() {
    return (
      <div className="content">
        <Header />
        <div className="tiles-container">
          <HappyButton />
          <DriveButton />
          <SadButton />
          <LoveButton />
          <AngryButton />
          <VibesButton />
        </div>
      </div>
    );
  }
}

export default App;
