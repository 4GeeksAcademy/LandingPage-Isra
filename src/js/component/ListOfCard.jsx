import React from "react";
import { data } from "./cardData";
import Card from "./Card";

const ListOfCard = () => {
  return (
    <div className="row">
      {data.map((historia) => (
        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <Card
            imgUrl={historia.image}
            title={historia.ti}
            textoContent={historia.content}
            buttonText={historia.buttonContent}
          />
        </div>
      ))}
    </div>
  );
};

export default ListOfCard;
