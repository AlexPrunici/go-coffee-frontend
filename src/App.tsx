import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { OrderPage } from "./pages/OrderPage";
import { KitchenPage } from "./pages/KitchenPage";
import { HomePage } from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="kitchen" element={<KitchenPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
