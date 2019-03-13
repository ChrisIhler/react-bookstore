import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
    <div>
      <div class="row">
        <div class="col">
        <input onChange={this.props.onChange(this.value) } value='' type="text" class="form-control" placeholder="Search by Title or Author"/>
        </div>
      </div>
    </div>
  )
  }
  
}

export default Search
