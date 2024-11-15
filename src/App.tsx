import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./pages/Table";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
   const token = localStorage.getItem("token");
   const navigate = useNavigate();

   useEffect(() => {
      if (token && token.length > 0) {
         navigate("/home");
      } else {
         navigate("/");
      }
   }, [navigate, token]);

   return (
      <>
         <ToastContainer />
         <Routes>
            <Route element={<LoginPage />} path="/" />
            <Route element={<HomePage />} path="/home" />
            <Route element={<HomePage />} path="/categorie" />
         </Routes>
      </>
   );
}

export default App;
