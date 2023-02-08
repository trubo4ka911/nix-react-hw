import React, { Component } from "react";
import { userData } from "../../data/userData";
import Header from "../header/Header";
import Filter from "../filter/Filter";
import Profile from "../userList/UserList";

class UserCards extends Component {
  state = {
    users: userData,
    filter: "",
    sort: "none",
    };
    changeFilter = (e) => {
        const {name, value}=e.currentTarget
    this.setState({ [name]: value });
    };
    filteredUsers = (value) => {  
    const normalizedFilter = value.toLowerCase();
          return this.state.users
              .filter((user) =>
      user.name.toLowerCase().includes(normalizedFilter))
              .sort((a, b) => a.name.localeCompare(b.name));
    };
    selectChanged = e => {
        const { value } = e.currentTarget
        this.setState({sort:value})
    }
    getVisibleUsers = () => {
        return this.state.users.filter((user) => {
            return user.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
        })
        //     .sort((a, b) => {
        //     switch (this.state.sort) {
        //         case "inc":
        //             return a.age - b.age;
        //         case "dec":
        //             return b.age - a.age;
        //         case "a-b":
        //             return a.name.localeCompare(b.name)
        //         default:
        //             break
        //     }
        // })
    };
    render() {
        const { filter } = this.state
        return (<>
            <Header>
                <Filter value={filter} onChange={this.selectChanged}></Filter>
            </Header>
            <Profile filteredUsers={this.getVisibleUsers()} />
        </>)
    }
}

export default UserCards