import React, { Component } from 'react';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Cart from './Components/Cart'
import Search from './Components/Search'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      filteredBooks: [],
      search: ''
    }
}

async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books', {method: 'get'})
  const json = await response.json()
  this.setState({books: json})   
  this.setState({filteredBooks: json})   
}

addToCart = async (addedbook) => {
  await fetch(`http://localhost:8082/api/books/cart/add/${addedbook.id}`, {method: 'PATCH'})
  const response = await fetch('http://localhost:8082/api/books', {method: 'get'})
  const json = await response.json()
  this.setState({books: json}) 
}

removeFromCart = async (id) => {
  await fetch(`http://localhost:8082/api/books/cart/remove/${id}`, {method: 'PATCH'})
  const response = await fetch('http://localhost:8082/api/books', {method: 'get'})
  const json = await response.json()
  this.setState({books: json})
}

onChange = (search) => {
console.log(search)

}

  render() { 
    return (
      <div>
        <Header />
        <div className='container-fluid'>
        
            <div className='row'>
              <div className='col-6'>

                <div class="card">
                  <div class="card-body">
                  <Search onChange={this.onChange}/>
                  </div>
                </div>

              <BookList addToCart={this.addToCart} books={this.state.books} inCart={this.state.inCart} style={{border: '30px solid green', borderColor: 'red' }}/>
              </div>

              <div className='col-6'>
              <Cart addToCart={this.addToCart} books={this.state.books} removeFromCart={this.removeFromCart} inCart={this.state.inCart}/>
              </div>

            </div>
          </div >

      </div>
    );
  }
}


export default App;
