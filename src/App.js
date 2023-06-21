import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieSearch from "./Components/MovieSearch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
