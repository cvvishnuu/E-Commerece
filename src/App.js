import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthenticateUser from "./pages/AuthenticateUser";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authenticate" element={<AuthenticateUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
