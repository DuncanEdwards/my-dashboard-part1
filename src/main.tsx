import { createRoot } from "react-dom/client";
import "./index.css";
import { light } from "./themes/themes";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={light}>Implement me!</ThemeProvider>
);
