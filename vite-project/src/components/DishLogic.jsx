// import { menu } from "../data/menuData"; //?
// recieving props from menuData and rendering them(exporting them to the next file that will utilize them).
// The prop keys we're fethcing are: title, price
// Bruk i app.js
import styles from "./Dish.module.css";

export default function Dish({ title, ingredients, price }) {
  {
    /* borrowing logic from class to see if I can get it to work */
  }
  return (
    <>
      <div className={styles.card}>
        {/* {" "} */}
        {/*adding some temp style to be able to see if I connect it properly*/}
        <h2>{title}</h2>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
