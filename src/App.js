import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Feature from "./Website/Pages/Feature";
import Team from "./Website/Pages/Team";
import Appointment from "./Website/Pages/Appointment";
import Testimonials from "./Website/Pages/Testimonials";
import Contact from "./Website/Pages/Contact";
import PNP from "./Website/Pages/PNP";

import Dashboard from "./Admin/Pages/Dashboard";
import Admin_Login from "./Admin/Pages/Admin_Login";
import Aheader from "./Admin/Components/Aheader";
import Afooter from "./Admin/Components/Afooter";
import Add_Doctors from "./Admin/Pages/Add_Doctors";
import Manage_Doctors from "./Admin/Pages/Manage_Doctors";
import Manage_Patients from "./Admin/Pages/Manage_Patients";
import Add_Medicine from "./Admin/Pages/Add_Medicine";
import Manage_Medicine from "./Admin/Pages/Manage_Medicine";
import Add_Supplies from "./Admin/Pages/Add_Supplies";
import Manage_Supplies from "./Admin/Pages/Manage_Supplies";
import Add_Services from "./Admin/Pages/Add_Services";
import Manage_Services from "./Admin/Pages/Manage_Services";
import Signup from "./Website/Pages/Signup";
import Login from "./Website/Pages/Login";
import Manage_feedback from "./Admin/Pages/Manage_feedback";
import Manage_Appointments from "./Admin/Pages/Manage_Appointments";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/services"
            element={
              <>
                <Service />
              </>
            }
          ></Route>
          <Route
            path="/feature"
            element={
              <>
                <Feature />
              </>
            }
          ></Route>
          <Route
            path="/ourdoctor"
            element={
              <>
                <Team />
              </>
            }
          ></Route>
          <Route
            path="/appointment"
            element={
              <>
                <Appointment />
              </>
            }
          ></Route>
          <Route
            path="/testimonials"
            element={
              <>
                <Testimonials />
              </>
            }
          ></Route>
          <Route
            path="contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <>
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <PNP />
              </>
            }
          ></Route>

          {
            // admin Routes-------------------------------------------------------------------------------
          }

          <Route
            path="/admin-login"
            element={
              <>
                <Admin_Login />
                {/* <Afooter /> */}
              </>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <Aheader />
                <Dashboard />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/add-doctors"
            element={
              <>
                <Aheader />
                <Add_Doctors />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-doctors"
            element={
              <>
                <Aheader />
                <Manage_Doctors />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-patients"
            element={
              <>
                <Aheader />
                <Manage_Patients />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/add-medicine"
            element={
              <>
                <Aheader />
                <Add_Medicine />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-medicine"
            element={
              <>
                <Aheader />
                <Manage_Medicine />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/add-supplies"
            element={
              <>
                <Aheader />
                <Add_Supplies />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-supplies"
            element={
              <>
                <Aheader />
                <Manage_Supplies />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/add-services"
            element={
              <>
                <Aheader />
                <Add_Services />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-services"
            element={
              <>
                <Aheader />
                <Manage_Services />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-feedbacks"
            element={
              <>
                <Aheader />
                <Manage_feedback />
                <Afooter />
              </>
            }
          ></Route>
          <Route
            path="/manage-appointments"
            element={
              <>
                <Aheader />
                <Manage_Appointments />
                <Afooter />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
