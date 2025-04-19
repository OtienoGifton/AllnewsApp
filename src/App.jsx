import "./App.css";
import MoviePage from "./components/moviepage.jsx";
import Favorite from "./components/favorite.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import "./index.css";
import Musicpage from "./components/musicpage.jsx";
import Bookpage from "./components/bookpage.jsx";
import Techpage from "./components/techpage.jsx";
import Homepage from "./components/homepage.jsx";
import Footballpage from "./components/footballpage.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/musicpage" element={<Musicpage />} />
          <Route path="/bookpage" element={<Bookpage />} />
          <Route path="/techpage" element={<Techpage />} />
          <Route path="/footballpage" element={<Footballpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
