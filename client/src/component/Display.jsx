import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Plus } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      fname: "Mahi",
      lname: "Singh",
      email: "mahi@gmail.com",
      gender: "male",
      password: "sssd",
    },
  ]);

  const getAllUser = () => {
    axios
      .get("http://localhost:3001/api/getAll")
      .then((users) => {
        // console.log(users);
        setData(users.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/deleteUser/${id}`)
      .then((users) => {
        console.log(users);
        getAllUser();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar
        text="All Register User"
        navText="Add User"
        navUrl="/add"
        navIcon={<Plus className="me-1" />}
      />
      <div className="d-flex align-items-center justify-content-center p-5 pt-0">
        <table className="table w-75">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Password</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{val.fname}</td>
                <td>{val.lname}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
                <td>{val.password}</td>
                <td>
                  <button onClick={() => navigate(`/update/${val._id}`)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteUser(val._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
