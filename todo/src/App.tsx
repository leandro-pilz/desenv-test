import "./App.css";

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./page/Home/Home";
import Auth from "./page/Auth/Auth";

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
            {/*
             <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="login"
              element={!auth ? <Auth /> : <Navigate to="/" />}
            />
            <Route
              path="register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
