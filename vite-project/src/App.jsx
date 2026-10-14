import { useState } from "react";
import Menu from "./components/ListMenu";
import { menu } from "./data/menuData";
// import Dish from "./components/DishLogic";
import "./App.css";
// import dishes
// import card logic!

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Attempted using Dish and then menu={menu}, did not work. Works after followin logic used in class, tho I'm still not sure I get it... */}
      <Menu menu={menu} />
    </>
  );
}

export default App;
