import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center relative">
      <h1 className="bg-white text-black rounded-lg text-center px-10 py-2 w-11/12 mt-4 text-4xl font-bold ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-6">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
