import { useState } from "react";
import Menu from "./components/ListMenu";
import { menu } from "./data/menuData";
import Dish from "./components/DishLogic";
import "./App.css";
// import dishes
// import card logic!

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*  */}
      <Dish menu={menu} />
    </>
  );
}

export default App;
