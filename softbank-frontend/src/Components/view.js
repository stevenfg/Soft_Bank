import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function View() {
  const [user, setUsers] = useState([]);
  console.log(user);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
    console.log(result.data);
    
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Users List</h1>
        <br></br>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Username</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Account Type</th>
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((users, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{users.username}</td>
                <td>{users.name}</td>
                <td>{users.lastname}</td>
                <td>{users.accounttype}</td>
                {/* <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${users.id}`}
                  >
                    View
                  </Link>
                  
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(users.id)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
