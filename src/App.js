import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from './pages/ListPage';
import FormPage from './pages/FormPage';
import ShowPage from './pages/ShowPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/new" element={<FormPage />} />
        <Route path="/edit/:id" element={<FormPage />} />
        <Route path="/people/:id" element={<ShowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
