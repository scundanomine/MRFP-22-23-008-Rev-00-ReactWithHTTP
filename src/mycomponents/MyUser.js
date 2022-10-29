import React, { Component } from 'react'
import fetch from 'fetch'

export class MyUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => {
        this.setState({posts:data})
      })
  }
  render() {
    return (
      <div>
        <h1>Post data is shown below</h1>
        {this.state.posts}
      </div>
    )
  }
}

export default MyUser
