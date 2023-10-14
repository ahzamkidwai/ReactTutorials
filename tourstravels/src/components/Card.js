import { useState } from "react";

function Card(props) {
  let desc = `${props.info.substring(0, 250)}...`;
  let f = false;
  let [description, setDescription] = useState(desc);
  function readMoreHandler() {
    if (f === false) {
      setDescription(props.info);
      f = true;
    } else if (f === true) {
      setDescription(desc);
      f = false;
    }
  }

  return (
    <div>
      <img src={props.image} alt="img1" className="imgs" />
      <div className="tours-details">
        <div className="tour-name">
          <p> {props.name} </p>
        </div>
        <div className="tour-price">
          <h4>{props.price} </h4>
        </div>
      </div>
      <div className="tour-description">
        {desc}
        <a onClick={readMoreHandler}>
          {f === false ? `Read More` : `Read Less`};
        </a>
      </div>
    </div>
  );
}

export default Card;
