import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span className="book">📖</span> Dictionary App
        </h1>
        <h5>Search for a word and find out it's definition</h5>
        <main>
          <Dictionary defaultKeyword="Forest" />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
