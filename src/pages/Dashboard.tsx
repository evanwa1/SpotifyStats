import { react } from "@vitejs/plugin-react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Link to="/signup">Sign Up </Link>
      <Link to="/login">Sign In </Link>
    </>
  );
}
