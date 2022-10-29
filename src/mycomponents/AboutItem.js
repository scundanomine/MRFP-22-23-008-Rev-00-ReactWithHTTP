import React, { Component } from 'react'

class AboutItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: ""
        }
    }
    
    render() {
        return (
            <div>
                <h3>About to find {2+2}</h3>
            </div>
        )
    }
}

export default AboutItem
