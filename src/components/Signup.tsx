import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SERVER_URI } from "../utils/constants-env";
import axios from "axios";
import { addUser } from "../utils/store/userSlice";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        SERVER_URI + "/login",
        { emailId: email, password: password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await axios.post(
        SERVER_URI + "/signup",
        { firstName, lastName, emailId: email, password },
        { withCredentials: true }
      );
      login();
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card card-border bg-base-300 w-96 mt-10">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary px-10" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
