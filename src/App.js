import "./App.css";
import Main from "./main";

var isWindows = process.platform === "win32";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
