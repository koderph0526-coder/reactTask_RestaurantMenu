import { useState } from "react";
import Menu from "./components/ListMenu";
import { menu } from "./data/menuData";
// import Dish from "./components/DishLogic";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="main">Meny</h1>
      <div className="grid">
        {/* <Attempted using Dish and then menu={menu}, did not work. Works after followin logic used in class, tho I'm still not sure I get it... */}

        <Menu menu={menu} />
      </div>
    </>
  );
}

export default App;
