import React from 'react'
import UserItem from './UserItem';

const Users = (props) => {

    return (
        <div style={userStyle}>
            {props.users.map(user =>
                <UserItem key={user.id} users={user} />
            )}
        </div>
    )


}
const userStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
export default Users;