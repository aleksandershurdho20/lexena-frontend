import "./App.css";
import Router from "./routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
