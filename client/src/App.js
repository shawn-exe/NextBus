import './App.css';
import Home from './pages/home';
import Mainpage from "./pages/mainpage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mainpage" element={<Mainpage />} />
</Routes>
      </BrowserRouter>
    );

}
export default App;
