import { menu } from "../data/menuData";
// recieving props from menuData and rendering them(exporting them to the next file that will utilize them).
// The prop keys we're fethcing are: title, price
// Bruk i app.js

export default function Dish({ title, ingredients, price }) {
  return (
    <>
      {/* borrowing logic from class to see if I can get it to work */}
      <div>
        <h1>{title}</h1>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
