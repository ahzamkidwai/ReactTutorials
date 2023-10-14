import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
