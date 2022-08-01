import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login_ad } from "../../../../libs/authenticationSlide";
const LoginForm = () => {
  const PORT = process.env.REACT_APP_HOST;
  const LOGIN = process.env.REACT_APP_LOGIN;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [info, setInfo] = useState({});
  function login() {
    axios
      .post(`${PORT}${LOGIN}`, info)
      .then((result) => {
        let { token } = result["data"];
        if (token) {
          dispatch(login_ad(token));
          navigate("/admin");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function setValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div style={{ minWidth: "20rem" }}>
        <MDBInput
          name="email"
          label="Email"
          id="email"
          type="text"
          onChange={setValue}
        />
        <MDBInput
          name="password"
          className="my-3"
          label="Password"
          id="password"
          type="password"
          onChange={setValue}
        />
        <MDBBtn type="button" className="w-100" onClick={login}>
          Login
        </MDBBtn>
      </div>
    </>
  );
};
export default LoginForm;
