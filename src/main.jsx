import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext";
import { LenisProvider } from "./providers/LenisProvider";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { injectStore } from "./services/api.js";

injectStore(store);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <LenisProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LenisProvider>
    </ShopContextProvider>
  </BrowserRouter>,
);
