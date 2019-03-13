import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
    <div>
      <div className="row">
        <div className="col">
        <input onChange={this.props.onChange} value={this.props.search} type="text" className="form-control" placeholder="Search by Title or Author"/>
        </div>
      </div>
    </div>
  )
  }
  
}

export default Search
