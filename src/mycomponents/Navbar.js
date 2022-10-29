import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    {/* <a href='https://www.thehindu.com/' target="_blank">Home</a>
                    &nbsp; &nbsp;
                    <a href='https://www.thehindu.com/' target="_blank">About</a> */}
                    <Link to="/home">Home</Link>
                    &nbsp; &nbsp;
                    <Link to="/about">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar
