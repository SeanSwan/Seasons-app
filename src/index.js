import ReactDOM from "react-dom";
import React from "react";
import './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={ Lat: null };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
      );
  }
  
  
  
  render() {
    

      return <div>Lattitude: {this.state.lat} </div>;
    
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));