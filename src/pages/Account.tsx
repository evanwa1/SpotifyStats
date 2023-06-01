import { useState, useContext } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthDetails from "./../components/AuthDetails";

interface Props {
  type: string;
}

function Account({ type }: Props) {
  let email = "";
  let password = "";

  return (
    <>
      <form
        onSubmit={() => {
          event.preventDefault();
          type == "Login" ? login(email, password) : create(email, password);
        }}
      >
        <label>{type}: </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          onChange={(e) => (email = e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="password"
          onChange={(e) => (password = e.target.value)}
          required
        />
        <button type="submit">{type}</button>
      </form>

      <AuthDetails />
    </>
  );
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log(userCredential))
    .catch((error) => {
      alert(error);
    });
}

function create(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log(userCredential))
    .catch((error) => {
      alert(error);
    });
}

export default Account;
