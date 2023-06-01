import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Account type="Login" />} />
      <Route path="/signup" element={<Account type="Create Account" />} />
    </Routes>
  );
}

export default App;
