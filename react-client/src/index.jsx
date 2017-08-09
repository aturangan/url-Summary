import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
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
      searchResults: []
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
    //make sure input can't change the code, security fix

    axios.post('/scrape', { input: input }).then(res => {
      if (!res.data) {
        console.log('Error'); 
      }
      console.log('Data received from Server: ', res.data); 
      this.setState({ searchResults: res.data });
    });
   
    //send input data to back end 
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