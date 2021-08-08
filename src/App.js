import React, { useState, useEffect } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import SideMenu from "./components/Layouts/SideMenu";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await fetch(
      "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_APIKEY,
        },
      }
    );
    const { nodes } = await response.json();
    setItems(nodes);

    // setTimeout(function () {
    //   setIsLoading(false);
    // }, 1500);

    // const script = document.createElement("script");
    // script.src = "/carousel.js";
    // script.async = false;
    // document.body.appendChild(script);
  };
  return (
    <div className="App">
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
