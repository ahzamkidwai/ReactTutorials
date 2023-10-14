import "./App.css";
import data from "./data.js";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex flex-col justify-center items-center border-2 h-[100vh] w-[100vw] bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold"> Our Testimonials </h1>
        <div className="bg-voilet-400 h-[4px] w-[1/5]"></div>
        <Testimonials reviews={data}></Testimonials>
      </div>
    </div>
  );
}

export default App;
