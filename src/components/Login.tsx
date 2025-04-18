import axios from "axios";
import { useState } from "react";
import { SERVER_URI } from "../utils/constants-env";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router";

function Login() {
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
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card card-border bg-base-300 w-96 mt-10">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
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
            <button className="btn btn-primary px-10" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
