
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';

import Certificate from "./components/certificates/Certificate"
import Payments from "./components/payment/Payments";
import AddCourse from "./components/course/AddCourse";
import CoursesList from "./components/course/coursesList"
import StudentsList from "./components/students/StudentsList"

function App() {
  return (
    <>
    <Router>
    <Home/>
      <Routes>
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/add" element={<AddCourse/>}/>
        <Route path="/courses" element={<CoursesList/>}/>
        <Route path="/students" element={<StudentsList/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
