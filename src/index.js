import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    soldOut: true,
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

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}
const Header = () => {
  // const style = {};
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>;
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <React.Fragment>
      <p>
        ReactPizza: Serving & Delivering delicious pizzas with speed, quality
        ingredients, and exceptional customer service right to your doorstep.
      </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza obj={pizza}></Pizza>
          ))}
        </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later!</p>
      )}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={closeHour}></Order>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className="order">
      <p>
        We're open until until {props.close}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

function Pizza({obj}) {
  // if (obj.soldOut) return null;

  return (
    <li className={`pizza ${obj.soldOut? "sold-out":""}`}>
      <img src={obj.photoName} alt={obj.name} />
      <div>
        <p>{obj.ingredients}</p>
        <h3>{obj.name}</h3>
        <span>{obj.soldOut? "SOLD OUT":obj.price * 15}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
