import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import ClimbPage from "./Pages/ClimbPage";
import HistoryPage from "./Pages/HistoryPage";
import HomePage from "./Pages/HomePage";
import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Accordian from "./Components/Accordian";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     children: [],
//   },
//   {
//     path: "/history",
//     element: <HistoryPage />,
//   },
//   { path: "/climb", element: <ClimbPage /> },
// ]);

function App() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial screen size
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenSize);
  if (screenSize.width < 450) {
    return <Accordian />;
  }
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Navbar2 />
      <HistoryPage />
      <ClimbPage />
      <Footer />
    </div>
    // <RouterProvider router={router} />
  );
}

export default App;
