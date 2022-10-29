import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        let a=1;
        let b=2;
        return (
            <div>
                <nav>
                    {/* <a href='https://www.thehindu.com/' target="_blank">Home</a>
                    &nbsp; &nbsp;
                    <a href='https://www.thehindu.com/' target="_blank">About</a> */}
                    <Link to="/home">Home</Link>
                    &nbsp; &nbsp;
                    <Link to="/about">About</Link>
                    <hr />
                    <Link to={`/about/${a}`}>1</Link>
                    &nbsp; &nbsp;
                    <Link to={`/about/${b}`}>2</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar
