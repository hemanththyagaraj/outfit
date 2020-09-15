import React, { useState } from "react";
import axios from "axios";
import withSignUpCard from "../../components/hocs/with-signup-card";
import InputRipple from "../../components/views/input-ripple/input-ripple";
import Button from "../../components/views/button/button";
import "./style.css";
import Upload from "../../components/views/upload/upload";
import Reader from "../../_helpers/reader";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: "",
    profilePicture:
      "https://storage.googleapis.com/download/storage/v1/b/outfit-7e104.appspot.com/o/avatar.svg?generation=1599371973341630&alt=media",
  });
  const ref = React.createRef();

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new Reader(file);
    const result = await reader.convertToDataUrl();
    setUser((prevState) => ({ ...prevState, profilePicture: result, file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      ref.current.setCustomValidity("Passwords do not match");
      return;
    }

    createUser();
  };

  const createUser = async () => {
    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("file", user.file);

      const response = await axios.post("/api/v1/users", formData);
      debugger;
    } catch (error) {
      debugger;
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="register__container">
      <h2 className="header">Sign up</h2>
      <div className="profilepic__container">
        <div
          className="profile__picture"
          style={{ backgroundImage: `url(${user.profilePicture})` }}
        />
        <Upload label="Change profile picture" onChange={handleUpload} />
      </div>
      <form className="register__form">
        <div className="register__from-field">
          <InputRipple
            label="Name"
            required
            id="user__name"
            name="name"
            onChange={handleChange}
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
          />
        </div>
        <div className="register__from-field">
          <InputRipple
            label="Password"
            required
            name="password"
            onChange={handleChange}
            id="user__password"
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
          />
        </div>
        <div className="register__from-field">
          <Button
            color="var(--primary-green)"
            size="medium"
            className="btn__register"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withSignUpCard(Register);
