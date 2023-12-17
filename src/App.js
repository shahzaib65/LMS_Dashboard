
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Login from "./components/login/Login"
import Certificate from "./components/certificates/Certificate"
import Payments from "./components/payment/Payments";
import AddCourse from "./components/course/AddCourse";
import CoursesList from "./components/course/coursesList"
import StudentsList from "./components/students/StudentsList"
import Enquiries from "./components/enquiry/Enquiries";


function App() {

  return (
    <>
    <Router>  
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/add" element={<AddCourse/>}/>
        <Route path="/courses" element={<CoursesList/>}/>
        <Route path="/students" element={<StudentsList/>}/>
        <Route path="/enquiry" element={<Enquiries/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
