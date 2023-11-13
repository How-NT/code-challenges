import "api/http-client";
import App from "pages/app";
import AppProviders from "pages/app-provider";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./font.css";
import "./global.css";

if (
  typeof window !== "undefined" &&
  "serviceWorker" in navigator &&
  process.env.NODE_ENV === "development"
) {
  const { worker } = require("./mocks/browser");
  worker.start();
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppProviders>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </AppProviders>
  </BrowserRouter>
);
