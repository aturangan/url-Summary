import React from 'react';
import styles from '../styles';

const ListItem = (props) => (
  <ul style={ styles.ul }>
    { props.searchResults.map(function(word, index) {
      return (<li key={ index }>{ word.word }</li>)
    })}    
  </ul>
);

export default ListItem;