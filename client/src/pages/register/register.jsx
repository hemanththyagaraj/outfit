import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import withSignUpCard from "../../components/hocs/with-signup-card/with-signup-card";
import InputRipple from "../../components/views/input-ripple/input-ripple";
import Button from "../../components/views/button/button";
import Upload from "../../components/views/upload/upload";
import { register, clearError } from "../../redux/auth/auth-actions";
import { AlertContext } from "../../context/alert/alert-state";
import "./register.css";

const Register = () => {
  const userOutline = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: "",
    profilePicture:
      "https://storage.googleapis.com/download/storage/v1/b/outfit-7e104.appspot.com/o/avatar.svg?generation=1599371973341630&alt=media",
  };

  const [user, setUser] = useState(userOutline);

  const ref = React.createRef();
  const history = useHistory()
  const { setAlert } = useContext(AlertContext);
  // central store
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleUpload = (file, dataUrl) => {
    setUser((prevState) => ({ ...prevState, profilePicture: dataUrl, file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      ref.current.setCustomValidity("Passwords do not match");
      return;
    }
    registerUser();
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUser(userOutline);
      history.push('/')
    } 
    else if (error) {
      setAlert("error", error);
      dispatch(clearError());
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const registerUser = async () => {
    const { name, email, password, file } = user;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (file) formData.append("file", file);

    dispatch(register(formData));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="register__container">
      <h2 className="header">Sign up</h2>
      <Upload
        defaultPic={user.profilePicture}
        label="Change profile picture"
        onChange={handleUpload}
      />
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__from-field">
          <InputRipple
            label="Name"
            required
            id="user__name"
            name="name"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div className="register__from-field">
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
        </div>
        <div className="register__from-field">
          <InputRipple
            label="Password"
            required
            name="password"
            onChange={handleChange}
            id="user__password"
            value={user.password}
          />
        </div>
        <div className="register__from-field">
          <InputRipple
            label="Confirm password"
            required
            ref={ref}
            name="confirmPassword"
            onChange={handleChange}
            id="confirm__password"
            value={user.confirmPassword}
          />
        </div>
        <div className="register__from-field">
          <Button
            color="var(--primary-green)"
            size="medium"
            className="btn__register"
            disabled={loading}
          >
            {loading ? "Registering please wait..." : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withSignUpCard(Register);
