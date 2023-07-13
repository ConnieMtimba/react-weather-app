import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by {""}
        <a href="/" target="_blank" rel="noopener noreferrer">
          ConnieMtimba
        </a>{" "}
        and is{""}
        {""}{" "}
        <a
          href="https://github.com/ConnieMtimba/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
