import { Route, Routes } from "react-router-dom";
import { useLayoutEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import OffCanvas from "./components/OffCanvas";
import Modal from "./components/Modal";
import CanvasNav from "./components/CanvasNav";
import useStore from "./Store";

function App() {
  const { isDark, setDark, isLeft } = useStore();

  useLayoutEffect(() => {
    const existingPreference = localStorage.getItem("anime-theme");
    if (existingPreference) {
      existingPreference === false ? setDark(false) : setDark(true);
    } else {
      setDark(false);
      localStorage.setItem("anime-theme", false);
    }
  }, []);

  if (isDark === true) {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }

  return (
    <div className="w-screen h-screen bg-slights dark:bg-sdarks transition-colors duration-150 overflow-hidden">
      <OffCanvas />
      <Modal />
      <div className={"flex w-full"}>
        <CanvasNav />
        <div
          className={"block flex-1" + (isLeft ? " order-last" : " order-first")}
        >
          <NavBar />
          <Routes>
            <Route index element={<Home />} path={"/"} />
            <Route index element={<Home />} path={"/home"} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
