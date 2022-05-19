import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import UserList from "../components/UserList";
import {v4 as uuidv4} from "uuid";
import {ToastContainer, toast} from "react-toastify";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "Beyza",
          surname: "Karababa",
          username: "beyzakrbba",
        },
        {
          id: uuidv4(),
          name: "Beyza2",
          surname: "Karababa2",
          username: "beyzakrbba2",
        },
        {
          id: uuidv4(),
          name: "Beyza3",
          surname: "Karababa3",
          username: "beyzakrbba3",
        },
        {
          id: uuidv4(),
          name: "Beyza4",
          surname: "Karababa4",
          username: "beyzakrbba4",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({users});
      toast(`user "${name}" is added. `);
    } else {
      toast.error("Please fill all of the fields.");
    }
  };

  deleteUser = (id, name) => {
    const users = this.state.users.filter((user) => {
      return user.id !== id;
    });
    this.setState({users});
    toast(`user "${name}" is deleted.`);
  };

  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            surname: surname,
            username: username,
          };
        }
        return user;
      });
      this.setState({
        users: updatedUsers,
      });
      toast(`user "${name}" is updated.`);
    }
  };

  render() {
    return (
      <div>
        <div>
          <ToastContainer />
          <Navbar color="dark" expand="md" dark>
            <div className="container">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
            </div>
          </Navbar>
          <UserList
            users={this.state.users}
            addUser={this.addUser}
            deleteUser={this.deleteUser}
            editUser = {this.editUser}
          />
        </div>
      </div>
    );
  }
}
