import Card from "./Card";

function Tours({toursdata}) {
  return (
    <div>
      <div className="">
        <h1 className="text-red-500"> Tours & Travels</h1>
      </div>
      <div>
        {
            toursdata.map((tour)=>{
                return <Card {...tour}></Card>
            })
        }
      </div>
    </div>
  );
}

export default Tours;
