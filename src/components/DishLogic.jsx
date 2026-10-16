// import { menu } from "../data/menuData"; //?
// recieving props from menuData and rendering them(exporting them to the next file that will utilize them).
// The prop keys we're fethcing are: title, price
// Bruk i app.js
import { createElement } from "react";
import styles from "./Dish.module.css";
// import { files } from "../assets/.jpg"; nope
const imgModules = import.meta.glob("/assets/*.{jpg}");

export default function Dish({ id, title, ingredients, price }) {
  // const menuImg = document.createElement("img");
  const menuImg = `./assets/${id}.jpg`;
  /* borrowing logic from class to see if I can get it to work */

  return (
    <>
      {/* assinging names to each prop/key I will use in the card */}
      <div className={styles.card}>
        {/*adding a bit of styling directly to the card and some of the props*/}
        <div className={styles.itemTxt}>
          <h2 className={styles.titleDish}>{title}</h2>
          <p>{ingredients}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <figure className={styles.imgMenu}>
          <img src={menuImg} alt="image of the dish" />
        </figure>
      </div>
    </>
  );
}
