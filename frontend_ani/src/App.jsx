import "./css/App.css";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { AnimeProvider } from "./context/AnimeContext";
import NavBar from "./components/navbar";

function App() {
  return (
    <AnimeProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </AnimeProvider>
  );
}

export default App;
