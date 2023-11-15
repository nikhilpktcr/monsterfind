import React, { Component } from 'react'
import './search-box.styles.css'
class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;
    return (
      <div>{
          <input className={className} type='search' placeholder={placeholder} onChange ={onChangeHandler}/>
        }
      </div>
    )
  }
}

export default SearchBox