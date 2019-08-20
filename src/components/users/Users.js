import React, { Component } from 'react'
import UserItem from './UserItem';

export default class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                name: 'Avinav'
            },
            {
                id: '2',
                name: 'Rushi'
            }
            ,
            {
                id: '3',
                name: 'Akya'
            },
            {
                id: '4',
                name: 'Avinav'
            },
            {
                id: '5',
                name: 'Rushi'
            }
            ,
            {
                id: '6',
                name: 'Akya'
            }

        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>
                    <UserItem key={user.id} users={user} />
                )}
            </div>
        )

    }

}
const userStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}