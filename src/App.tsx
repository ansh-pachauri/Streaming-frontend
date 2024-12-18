import { Route,BrowserRouter as Router, Routes } from "react-router"
import Signup from "./components/Signup"

import Title from "./components/Title"
import Signin from "./components/Signin";
import { Dashboard } from "./components/Dashboard";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
