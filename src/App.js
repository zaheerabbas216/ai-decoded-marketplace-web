import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/approutes";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
