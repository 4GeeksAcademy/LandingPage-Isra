import React from "react";

import NavBar from "./NavBar";
import JumboCard from "./JumboCard";
import ListOfCard from "./ListOfCard";
import Footer from "./Footer";

const Home = () => {
  const textoJumboCard =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo molestiae accusantium necessitatibus distinctio, natus ut consequatur ex maxime rem officia fugit corrupti.";

  return (
    <div className="container-fluid px-0">
      <NavBar
        brand="4Geeks"
        home="Home"
        link1="About"
        link2="Services"
        link3="Contact"
      />
      <div className="col-12">
        <JumboCard
          title="A Warm Welcome!"
          textoContent={textoJumboCard}
          buttonText="Call to action"
        />
      </div>
      <ListOfCard />
      <Footer brand="4Geeks Academy" />
    </div>
  );
};

export default Home;
