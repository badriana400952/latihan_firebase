import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home'
import AddProduk from './page/AddProduk';
import EditProduk from './page/EditProduk';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddProduk />} />
        <Route path="edit/:id" element={<EditProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
