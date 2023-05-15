import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  // WHEN DEALING WITH AXIOS YOU NEED 3 things:
  // - 1) async
  // - 2) await
  // - 3) .data
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //CHANGE THIS
      // let Chars = await axios.get('https://www.swapi.tech/api/people/?page=1');
      this.setState({
        error: false
      });
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error Occured: ${error.response.status}`
      })
    }
  }

  handleLocationSubmit = async (e) => {
    e.preventDefault();

    // let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;

    // let cityData = await axios.get(url);
  }

}







export default App;
