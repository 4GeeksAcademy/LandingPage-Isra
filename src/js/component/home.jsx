import React from "react";

import NavBar from "./NavBar";
import JumboCard from "./JumboCard";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const textoJumboCard =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo molestiae accusantium necessitatibus distinctio, natus ut consequatur ex maxime rem officia fugit corrupti.";
  const imagenesCard = [
    "https://fastly.picsum.photos/id/652/500/325.jpg?hmac=uiHErCDhNN7plNZ_XPYxKMf6Ghb2weyre1YmPEZq6N4",
    "https://fastly.picsum.photos/id/185/500/325.jpg?hmac=U4cE-mc-GNpwPLVugMgDamz9j3lHVBaPT2tNdZuGEig",
    "https://fastly.picsum.photos/id/387/500/325.jpg?hmac=S63gYsILRhDgcfFGR4CWTq_Fgvzk9ysLpAgNIHlcP3c",
    "https://fastly.picsum.photos/id/494/500/325.jpg?hmac=cPU_7tnl8pIF7Jqg8W5kjF0cxJ9x1rUIx86ccOGe8zA",
  ];

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
      <div className="row">
        {imagenesCard.map((imgUrl) => (
          <div className="col-12 col-lg-3 mb-4 d-flex justify-content-center">
            <Card
              imgUrl={imgUrl}
              title=" Titulo de la card"
              textoContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non quisquam nulla! Magni, voluptatem! Ipsum quia porro labore modi!"
              buttonText="Find Out More!"
            />
          </div>
        ))}
      </div>
      {/* <div className="row"> 
        <div className="col-12 col-lg-3 mb-4 d-flex justify-content-center">
          <Card
            imgUrl={imagenesCard[0]}
            title="Titulo 1: El inicio"
            textoContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non quisquam nulla! Magni, voluptatem! Ipsum quia porro labore modi!"
            buttonText="Find Out More!"
          />
        </div>
        <div className="col-12 col-lg-3 mb-4 d-flex justify-content-center">
          <Card
            imgUrl={imagenesCard[1]}
            title="Titulo 2: Empezamos el desarrollo"
            textoContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non quisquam nulla! Magni, voluptatem! Ipsum quia porro labore modi!"
            buttonText="Find Out More!"
          />
        </div>
        <div className=" col-12 col-lg-3 mb-4 d-flex justify-content-center">
          <Card
            imgUrl={imagenesCard[2]}
            title="Titulo 3: Continuamos el desarrollo"
            textoContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non quisquam nulla! Magni, voluptatem! Ipsum quia porro labore modi!"
            buttonText="Find Out More!"
          />
        </div>
        <div className=" col-12 col-lg-3 mb-4 d-flex justify-content-center">
          <Card
            imgUrl={imagenesCard[3]}
            title="Titulo 4: Este es el final"
            textoContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum non quisquam nulla! Magni, voluptatem! Ipsum quia porro labore modi!"
            buttonText="Find Out More!"
          />
        </div>
      </div>*/}
      <Footer brand="4Geeks Academy" />
    </div>
  );
};

export default Home;
