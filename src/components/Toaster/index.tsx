import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = () => (
  <ToastContainer
    position="bottom-left"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);
