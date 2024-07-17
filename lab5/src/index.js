import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import buildings from "./img/png1.jpg";
import reportWebVitals from "./reportWebVitals";
import User from "./comments";
import avt1 from "./img/avt1.jpg";
import avt2 from "./img/avt2.jpg";
import avt3 from "./img/avt3.jpg";
import avt4 from "./img/png4.jpg"

const App = function () {
  let fullname = "Muyinjon Turobov";
  function greeting() {
    return "Good Evening";
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "orange" }}>Welcome to React</h1>
      <p>{greeting()} Lets be Familiar with JSX elements</p>
      <figure>
        <img className="buildings" src={buildings} alt="buildings" />
        {fullname}
      </figure>
      <section className="user-container">
        <User image={avt1} date="8/8/2021" comments="good" />
        <User image={avt2} date="8/8/2021" comments="nice" />
        <User  image={avt3} date="8/3/2022" comments="amazing" />
        <User image={avt4} date="8/8/2025" comments="Its bad" />
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
