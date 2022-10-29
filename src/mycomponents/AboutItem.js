import React, { Component } from 'react'

class AboutItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "1"
        }
    }
    
    render() {
        return (
            <div>
                <h3>About to find {this.props.uid}</h3>
            </div>
        )
    }
}

export default AboutItem
