import { useState } from "react";
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
      {/* Read on themeContext(is for css more specifically) aka useContext-> next subject? yes */}
    </>
  );
}

export default App;
