import React from "react";
import { Card } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron
        title="Jumbotron Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Natoque penatibus et magnis dis parturient montes nascetur. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas quis ipsum suspendisse ultrices gravida."
        buttonUrl="/"
        buttonLabel="Learn More"
      />
      <div className="container d-flex">
        <Card
          title="Home"
          imageUrl="https://via.placeholder.com/200"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonUrl="/"
          buttonLabel="Learn More"
        />
        <Card
          title="About"
          imageUrl="https://via.placeholder.com/200"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonUrl="/"
          buttonLabel="Learn More"
        />
        <Card
          title="Services"
          imageUrl="https://via.placeholder.com/200"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonUrl="/"
          buttonLabel="Learn More"
        />
        <Card
          title="Contact"
          imageUrl="https://via.placeholder.com/200"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonUrl="/"
          buttonLabel="Learn More"
        />
      </div>
      <div className="text-center">
        <p>
          Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
          with love!
        </p>
      </div>
    </div>
  );
};

export default Home;
