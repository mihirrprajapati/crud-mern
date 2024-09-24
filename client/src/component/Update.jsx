import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((user) => {
        console.log(user);
        setFname(user.data.fname);
        setLname(user.data.lname);
        setEmail(user.data.email);
        setGender(user.data.gender);
        setPassword(user.data.password);
        setCpassword(user.data.password);
      })
      .catch((err) => console.log(err));
  }, []);

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
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
      <Navbar text="Update User" navText="Back" navUrl="/" navIcon={null} />
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
              value={fname}
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
              value={lname}
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
              value={email}
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
                checked={gender == "male" ? true : false}
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
                checked={gender == "female" ? true : false}
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
              value={password}
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
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary fs-5">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
