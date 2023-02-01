import { Routes, Route } from "react-router-dom";
import DetailTodos from "./components/DetailTodos";
import EditTodos from "./components/EditTodos";
import Home from "./components/Home";
import TambahTodos from "./components/TambahTodos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <article className="">
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tambahtodos" element={<TambahTodos />}></Route>
        <Route path="/detail/:id" element={<DetailTodos />}></Route>
        <Route path="/edittodos/:id" element={<EditTodos />}></Route>
      </Routes>
    </article>
  );
}

export default App;
