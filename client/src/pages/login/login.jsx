import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import withSignUpCard from "../../components/hocs/with-signup-card/with-signup-card";
import Button from "../../components/views/button/button";
import InputRipple from "../../components/views/input-ripple/input-ripple";
import { AlertContext } from "../../context/alert/alert-state";
import { login, clearError } from "../../redux/auth/auth-actions";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { setAlert } = useContext(AlertContext);
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(user));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUser({ email: "", password: "" });
      history.push('/')
    } 
    else if (error) {
      setAlert("error", error);
      dispatch(clearError());
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  return (
    <div className="login__container">
      <h2 className="header">Sign in</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="login__from-field">
          <InputRipple
            label="Email"
            type="email"
            required
            name="email"
            id="user__email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
            value={user.email}
          />
          <div className="login__from-field">
            <InputRipple
              label="Password"
              required
              name="password"
              onChange={handleChange}
              id="user__password"
              value={user.password}
            />
          </div>
          <div className="login__from-field">
            <Button
              color="var(--primary-green)"
              size="medium"
              className="btn__login"
              disabled={loading}
            >
              {loading ? "Login..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withSignUpCard(Login);
