import React, {Component} from "react";
import {Table} from "reactstrap";
import FormComponent from "./FormComponent";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      user: {},
    };
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({isVisible: false});
  }

  getElementById(value) {
    this.setState({
      user: value,
      isVisible: true,
      title: value.name,
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <button
          className="btn btn-primary"
          onClick={() => this.setState({user: {} , isVisible: true, title:"New User"})}
          style={{display: "flex", alignItems: "flex-end", float: "right"}}
        >
          Add User
        </button>
        {this.state.isVisible ? (
        <FormComponent
          isVisible={this.state.isVisible}
          hide={this.hide}
          addUser={this.props.addUser}
          user={this.state.user}
          title={this.state.title}
          editUser={this.props.editUser}
        />
        ) : null}
        <Table >
          <thead>
            <tr>
             {/* <th>Id</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                {/* <th scope="row">{user.id}</th> */}
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=> this.getElementById(user)}>edit</button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.deleteUser(user.id, user.name)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
