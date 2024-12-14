import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/approutes";
import Navbar from "./components/Header/Header";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
