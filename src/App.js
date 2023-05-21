import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import StoreDetailPage from "./components/StoreDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/stores/:id" element={<StoreDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
