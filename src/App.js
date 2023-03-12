import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FileTree from "./Components/FileTree"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
