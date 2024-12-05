import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@pigment-css/react/styles.css";
import App from "./App.tsx";


type Theme = {
  palette: {
    primary: { main: string; light: string; dark: string };
    secondary: { main: string; light: string; dark: string };
  };
  typography: { fontFamily: string };
};

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?:
        | React.CSSProperties
        | ((theme: Theme) => React.CSSProperties)
        | ReadonlyArray<
            React.CSSProperties | ((theme: Theme) => React.CSSProperties)
          >;
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
