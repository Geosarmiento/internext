import React, { Component } from "react";





class SingIn extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }

    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div>
             

            </div>
        );
    }
}

export default SingIn

