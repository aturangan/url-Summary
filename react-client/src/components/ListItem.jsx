import React from 'react';

const ListItem = (props) => (
  <ul>
    {props.searchResults.map(function(word, index) {
      return (<li key={ index }>{ word.word }</li>)
    })}    
  </ul>
)

export default ListItem;