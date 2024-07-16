import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

// import { pizzaData } from "../public/data";

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

//  app Component
function App() {
  return (
    // className ==> class in HTML
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//  structure of the webpage
// header component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

// menu component
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional Rendering */}
      {numPizza > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cusine. 6 creative dish to choose from. All from
            our stone oven, all organic, all delicious
          </p>
          {/* // loop through pizza array */}
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* passing Props ( property ) */}
      {/* <Pizza
          name="Pizza Spinaci"
          image="pizzas/spinaci.jpg"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={10}
        />

        <Pizza
          name="Pizza Funghi"
          image="pizzas/funghi.jpg"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
        /> */}
    </main>
  );
}

//  passing Destructured pizzaObject insted of generic props
function Pizza({ pizzaObj }) {
  // console.log(props); // returns a object of above props passed

  // Sold out pizza
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// footer component
function Footer() {
  // Js logic in component
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!!");
  // else alert("Sorry we're Closed");

  //  without using Jsx
  // return React.createElement("footer", null, "We're currently Open");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently Open */}

      {/* conditional rendering */}
      {isOpen ? (
        <Timing closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Timing(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// REACT V.18
// root is the main container where all components will be displayed
const root = ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
