import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  // handleCitySubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     //CHANGE THIS
  //     let city = await axios.get(url);
  //     this.setState({
  //       error: false
  //     });
  //   }
  //   catch (error) {
  //     this.setState({
  //       error: true,
  //       errorMessage: `An error Occured: ${error.response.status}`
  //     });
  //   }
  // }

  handleLocationSubmit = async (e) => {
    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;

    let cityData = await axios.get(url);

    // proof of life:
    console.log(cityData.data);

    this.setState({
      cityData: cityData.data[0]
    });
    //  console.log(this.state.cityName);
  }
  changeCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`

    return (
      <>
        <h1>Data from an API</h1>
        <form onSubmit={this.handleLocationSubmit}>
          <label>Search for a City!
            <input name="city" onChange={this.changeCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
      </>
    );
  }
}

export default App;