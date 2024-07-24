import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home, Profile, Login, Register, Landmark } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landmark/:landmarkId" element={<Landmark />} />
    </Routes>
  );
}

export default App;
