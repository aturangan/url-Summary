import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchBar from './components/SearchBar.jsx';
import styles from './styles.js'; 

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.search = this.search.bind(this); 
  }

  search(input) {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 700);
    console.log('search: ', input);
    // axios.get(`/search?query=${input}`)
    // .then((response) => {
    //   console.log('RES DATA API IS', response.data);
    //   this.setState({
    //     data: response.data,
    //   }, () => this.setState({
    //     lat: response.data.lat,
    //     lng: response.data.lng,
    //   }));
    // })
    // .then(
    //   this.setState({
    //     favView: false,
    //     mainView: true,
    //   }, this.setState({ mapView: true })),
    // )
    // // .then(this.setState({ isLoading: false }))
    // .catch((error) => {
    //   if (error) {
    //     this.setState({
    //       isLoading: false,
    //     });
    //   }
    //   console.warn(error);
    // });
  }


  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={ styles.background }>

          <div style={ styles.background2 }>
          <h1 style={ styles.title }>URL Summary</h1>
          <SearchBar
            onSearch={ this.search }
            style={ styles.main }
          />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));