import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
// import Form from "./components/form";


function App() {

  
  return (
  <>
<Router>
      <Navbar />
      {/* <Form/> */}
      <Routes>  
      <Route path="/home" />
        <Route path="/Become a teacher" />
        <Route path="/English,usd" />
        <Route path="/About us" />
        <Route path="/contact" />
        <Route path="/Register" />
        <Route path="/Login" />
      </Routes>
    </Router>
    </>
    );
}







  




export default App;
