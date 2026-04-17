import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext";
import { LenisProvider } from "./providers/LenisProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <LenisProvider>
      <App />
      </LenisProvider>
    </ShopContextProvider>
  </BrowserRouter>,
);
