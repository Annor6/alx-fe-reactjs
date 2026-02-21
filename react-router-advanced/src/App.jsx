import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App; // <- Only one default export