import "./App.css";
import Main from "./Main";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Main />
    </NextUIProvider>
  );
}

export default App;
