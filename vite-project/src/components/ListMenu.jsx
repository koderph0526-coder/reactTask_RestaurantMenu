import Dish from "./DishLogic";

export default function Menu(props) {
  return (
    <>
      <h1>Meny</h1>
      {/* still following logic from class for now to see if I can get it to work and then see if I can alter it without it breaking */}
      {props.menu?.map((item) => (
        <Dish key={item.id} {...item} />
      ))}
    </>
  );
}
