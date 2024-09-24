import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", {
        fname,
        lname,
        email,
        gender,
        password,
      })
      .then((user) => {
        // console.log(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar text="Register User" navText="Back" navUrl="/" navIcon={null} />
      <div className="d-flex align-items-center justify-content-center p-5 pt-0">
        <form className="w-25" onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label fs-5">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              aria-describedby="emailHelp"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label fs-5">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              aria-describedby="emailHelp"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="fs-5">Gender</div>
          <div className="d-flex my-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={true}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label me-3" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label fs-5">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary fs-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
