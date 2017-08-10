import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SearchBar from './components/SearchBar.jsx';
import ListItem from './components/ListItem.jsx'; 
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
    
    input = input.toString();  
    let www = input.slice(0, 5); 
    
    if (www === 'www.') {
      input = 'http://' + input; 
    }

    axios.post('/scrape', { input: input }).then(res => {
      if (!res.data) {
        console.log('Error receiving data from the server'); 
      } else {
        console.log('Data received from Server: ', res.data); 
        this.setState({ searchResults: res.data });
      }
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={ styles.background }>
          <div style={ styles.background2 }>
            <h1 style={ styles.title }>URL Summary</h1>
            <h3 style={ styles.h3 }>Just Enter a URL and See the Site Summary on the Right!</h3>
            <SearchBar onSearch={ this.search } style={ styles.main }/>
            <ListItem searchResults={ this.state.searchResults }/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));