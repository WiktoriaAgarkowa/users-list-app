import React from 'react';
import './UsersList.css';

function UsersList (props) {

    let usersList = props.usersList;
    let usersLiElements = usersList.map(user=> <li key={user.id}>{user.name} <span onClick={() => props.removeUserMethod(user.id)} className="remove">X</span></li> );

    console.log(usersList)

    return (
        <div className="name-list">
            <ul>
                {usersLiElements}
            </ul>
        </div>
    )
    
}


export default UsersList;