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

  componentDidMount() {
    console.log('My componeent was rendered on screen');

  }
  

  componentDidUpdate() {
    console.log('My component was just updated - it rendered!');
  }
  
  
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMesage && this.state.lat) {
      return <div>Lattitude: {this.state.errorMessage}</div>
    }

    return <div>Loading!</div>

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));