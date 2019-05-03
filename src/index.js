import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SeasonDisplay from './SeasonDisplay';
import  Loading from './Loading';      



class App extends React.Component {
  
  state ={ lat: null, errorMessage: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
           
    );
  }

  
 
  renderContent () {
    
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
  
      if (!this.state.errorMesage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
  
      return <Loading message='please accept location request' />;
  
    
  }
  
  render() {
    return (
      <div className='borderBlue'>
        {this.renderContent()}
      </div>
    );

    
  }
  
}

ReactDOM.render(<App />, document.querySelector("#root"));