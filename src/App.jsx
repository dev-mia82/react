import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import MonthlyTodo from "./pages/MonthlyTodo";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import TodoContext from "./hoc/TodoContext";

function App() {

  return (
    <TodoContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MonthlyTodo />} />
          <Route path="/:year/:month" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TodoContext>
  )
}

export default App
