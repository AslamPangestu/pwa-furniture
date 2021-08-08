import React, { useState, useEffect } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import SideMenu from "./components/Layouts/SideMenu";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";
import Offline from "./components/Offline";

function App() {
  const [items, setItems] = useState([]);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  useEffect(() => {
    getItems();
    checkOnlineStatus();
    return () => {
      window.removeEventListener("online", offlineStatusHandler);
      window.removeEventListener("offline", offlineStatusHandler);
    };
  }, [offlineStatus]);

  const offlineStatusHandler = () => {
    setOfflineStatus(!navigator.onLine);
  };

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
    initCarousel();
  };

  const initCarousel = () => {
    const script = document.createElement("script");
    script.src = "/carousel.js";
    script.async = false;
    document.body.appendChild(script);
  };

  const checkOnlineStatus = () => {
    offlineStatusHandler();
    window.addEventListener("online", offlineStatusHandler);
    window.addEventListener("offline", offlineStatusHandler);
  };

  return (
    <div className="App">
      {offlineStatus && <Offline />}
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
