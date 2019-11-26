import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class Alert extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      snackbaropen: '', message: '' 
    };
  }

  snackBarOpen(){
    this.setState({snackbaropen: this.props.snackbaropen});
  }

  snackBarClose () {
    this.setState({snackbaropen: this.props.snackbarclose});
  };
  
  render(){
    return(
      <Snackbar
        style={{backgroundColor: 'green'}}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={this.snackBarOpen}
        autoHideDuration={3000}
        onClose={this.snackBarClose}
        message={<span id="message-id"> {this.props.message} </span>}
        action={[<IconButton
          key="close"
          arial-label="Close"
          color="inherit"
          onClick={this.snackBarClose}
        >x</IconButton>]}
        >
      </Snackbar>
    );
  }
}