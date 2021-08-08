import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import SideMenu from "./components/Layouts/SideMenu";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
