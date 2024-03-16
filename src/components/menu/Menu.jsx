// import Pizza from "../pizza/Pizza"


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu(){
  return(
      <main className="menu">
        <h2>Our Pizzas</h2>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delish!</p>
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <li key={index} className="pizza">
              <img src={`/pizzas/${pizza.photoName}`} alt="" />
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <p>{`$${pizza.price}`}</p>
              {pizza.soldOut && <p>Sold Out</p>}
            </li>
          ))}
      </ul>
    </main>
  )};


// function Menu(){
//   return (
//     <main className="menu">
//       <h2>Our Pizzas</h2>
//       <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delish!</p>
//       <Pizza />
//       </main>
//       )};

export default Menu
export {pizzaData}