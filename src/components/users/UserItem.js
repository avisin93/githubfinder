import React from 'react'

const UserItem = props => {
    const { login } = props.users;

    return (
        <div className='card text-center'>
            {login}
        </div>
    )

}

export default UserItem;
