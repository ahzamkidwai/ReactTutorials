import React, {useState} from "react";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
import "./App.css";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998",
    },
    {
      itemName: "Surfexcel",
      itemDate: "22",
      itemMonth: "July",
      itemYear: "1999",
    },
    {
      itemName: "Maggie",
      itemDate: "23",
      itemMonth: "August",
      itemYear: "2000",
    },
  ];

  const [title, setTitle] = useState(this.props.it('should ', () => {
    
  })
  )

  function clickhandler() {
    setTitle("popcorn";)
    console.log("Button Clicked"); 
  }

  return (
    <div>
      <Card>
        <div className="item-container">
          <div className="inner-item-conatiner">
            <ItemDate
              day={response[0].itemDate}
              month={response[0].itemMonth}
              year={response[0].itemYear}
            ></ItemDate>
            <Item name={response[0].itemName}></Item>
            <button onClick={clickhandler}> Add to Cart </button>
          </div>

          <div className="inner-item-conatiner">
            <ItemDate
              day={response[1].itemDate}
              month={response[1].itemMonth}
              year={response[1].itemYear}
            ></ItemDate>
            <Item name={response[1].itemName}></Item>
          </div>
          <div className="inner-item-conatiner">
            <ItemDate
              day={response[2].itemDate}
              month={response[2].itemMonth}
              year={response[2].itemYear}
            ></ItemDate>
            <Item name={response[2].itemName}></Item>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
