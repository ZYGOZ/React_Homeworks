import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Translator from "./Components/Translator"
import Sidebar from "./Components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
