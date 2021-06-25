import React from "react";
import Cat from "./components/Cat/Cat";
import "../Home/Home.css";
import Pulse from "react-reveal/Pulse";

const Home = ({ history }) => {
  return (
    <div className="home-catbot-container">
      <div className="home-catbot-content">
        <Cat history={history} />
        <div className="home-catbot-greeting">
          <Pulse opposite>
            <h1>Hola Humano!</h1>
          </Pulse>
          <Pulse opposite>
            <h5>Clickea en el gato para ingresar :)</h5>
          </Pulse>
        </div>
      </div>
    </div>
  );
};

export default Home;
