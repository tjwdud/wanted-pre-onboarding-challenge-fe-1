import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from "pages/todo.jsx";
import Auth from "pages/auth.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
