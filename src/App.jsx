import Navbar from "./components/navbar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/howworks-page.css";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/dashboard" ||
    location.pathname === "/my-scripts";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <AppRoutes />
    </>
  );
}

export default App;