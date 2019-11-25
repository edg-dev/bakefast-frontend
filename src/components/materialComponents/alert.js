import React, { Component } from "react";
//import ReactSnackBar from "react-js-snackbar";

class Demo extends Component {
    constructor(props){
        super(props);
    }
  state = {
    Show: false,
    Showing: false
  };

  show = () => {
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 2000);
  };
  render() {
    return (
      <div>
        <ReactSnackBar Icon={<span>🦄</span>} Show={this.state.Show}>
            {this.props.message}
        </ReactSnackBar>
      </div>
    );
  }
}