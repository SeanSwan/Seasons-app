import ReactDOM from "react-dom";
import React from "react";
import './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={ Lat: null, errorMessage: '' };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  
  
  
  render() {
    

      return( 
      <div>
        Lattitude: {this.state.lat} 
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));