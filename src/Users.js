import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList';


class Users extends Component {

    constructor() {
        super();

        this.state = {
            users: []
        };
    }

    addUser = (e) => {
        e.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }

        console.log(newUser)

        this.setState((state) => {
            return ({
                users: state.users.concat(newUser)
            })
        })

        this._inputName.value = "";
    }

    removeUser = (userId) => {

        this.setState(state => {
            return ({
                users: state.users.filter((user) => {return(user.id !== userId)})
            })
        })
    }


    render() {

        return(
            <div className="users-main">
                <h1>User's list</h1>

                <form onSubmit={this.addUser}>
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name"></input>

                    <button type="submit">Add user</button>
                </form>

                <UsersList usersList={this.state.users} removeUserMethod = {this.removeUser}/>

            </div>
        );
    }
}

export default Users;