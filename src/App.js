import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToDo from "./Components/ToDoList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
