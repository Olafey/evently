import React, { useState } from "react";
import "../../styles/signUp.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

//form validation
//form input

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signSchema),
  });
  const toggPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const signed = (data) => {
    alert("success");
    console.log(data);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(signed)}>
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            {...register("email")}
          />
          {error.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            {...register("name")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            {...register("password")}
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
