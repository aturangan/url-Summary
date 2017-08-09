import React from 'react';
import SearchInput from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from '../styles';

const blank = []; 

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      input: ''
    };
    this.onUpdateInput = this.onUpdateInput.bind(this); 
  }

  onUpdateInput(input) {
    this.setState({
      input: input
    });
  }

  render() {
    return (
      <div>
        <SearchInput
          style={ styles.main }
          hintText="Type Something!"
          dataSource={ blank }
          searchText={ this.state.input }
          onUpdateInput={ this.onUpdateInput }
        />
        <RaisedButton
          style={ styles.searchButton }
          label="Search" 
          backgroundColor={ styles.mainColor }
          labelColor="rgb(255, 255, 255)"
          onClick={ () => this.props.onSearch(this.state.input) }
        />
      </div>
    );
  }
}

export default SearchBar; 