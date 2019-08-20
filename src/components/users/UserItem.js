import React, { Component } from 'react'

class UserItem extends Component {
    state = this.props.users;
    render() {
        return (
            <div className='card text-center'>
                {this.state.name}
            </div>
        )
    }
}

export default UserItem
