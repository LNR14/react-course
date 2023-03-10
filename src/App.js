import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import FirstPage from './pages/FirstPage';
import KrispyKreme from './pages/KrispyKreme';
import TestingPage from './pages/TestingPage';
import NoPage from "./pages/NoPage";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />
          <Route path="/krispyKreme" element={<KrispyKreme/>} />
          <Route path="/testing" element={<TestingPage/>} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);