import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
    <>
      <Header />
      {!logged ? <Login onLogin={setLogged} /> : <Dashboard />}
      <Footer />
    </>
  );
}
