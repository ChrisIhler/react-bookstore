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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`, {method: 'get'})
  const json = await response.json()
  this.setState({books: json})   
  this.setState({filteredBooks: json})   
}

addToCart = async (addedbook) => {
  await fetch(`${process.env.REACT_APP_API_URL}/api/books/cart/add/${addedbook.id}`, {method: 'PATCH'})
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`, {method: 'get'})
  const json = await response.json()
  this.setState({books: json}) 
}

removeFromCart = async (id) => {
  await fetch(`${process.env.REACT_APP_API_URL}/api/books/cart/remove/${id}`, {method: 'PATCH'})
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`, {method: 'get'})
  const json = await response.json()
  this.setState({books: json})
}

onChange = ( e ) => {
console.log(e.target.value)
this.setState({search: e.target.value})
console.log(this.state.search)

}

filteredbySearch = (book ) => {
  let title = book.title.toLowerCase()
  let author = book.author.toLowerCase()
  let search = this.state.search.toLowerCase()
  if (title.includes(search) || author.includes(search)){
    return true
  } else {
    return false
  }
}

  render() { 
    return (
      <div>
        <Header />
        <div className='container-fluid'>
        
            <div className='row'>
              <div className='col-6'>

                <div className="card">
                  <div className="card-body">
                  <Search onChange={this.onChange} search={this.state.search}/>
                  </div>
                </div>

              <BookList addToCart={this.addToCart}  books={this.state.books.filter(this.filteredbySearch)} inCart={this.state.inCart} style={{border: '30px solid green', borderColor: 'red' }}/>
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
