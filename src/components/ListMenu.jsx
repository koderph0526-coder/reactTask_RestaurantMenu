import Dish from "./DishLogic";

export default function Menu(props) {
  return (
    <>
      {/* still following logic from class for now to see if I can get it to work and then see if I can alter it without it breaking */}
      {props.menu?.map((item) => (
        <Dish key={item.id} {...item} />
        // this destructures the items and maps the key data form Dish.jsx(which again is fetched from data.js), making a card for each dataset ?
      ))}
    </>
  );
}
