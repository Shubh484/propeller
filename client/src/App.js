import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </Router>
  );
}

export default App;
