import './App.css';
import yashaLogo from "./assets/yasha-be-logo.gif";

const GifComponent = () => {
  return <img src={yashaLogo} alt="GIF Example" />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Correctly rendering the GIF component */}
        <GifComponent />
        <p>Oh na batq</p>
        <a
          className="App-link"
          href="https://github.com/yasha-be"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yashaaa
        </a>
      </header>
    </div>
  );
}

export default App;
