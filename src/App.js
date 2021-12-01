import "./App.css";

import GlassCard from "./glasscard";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GlassCard />
    </div>
  );
}

export default App;
