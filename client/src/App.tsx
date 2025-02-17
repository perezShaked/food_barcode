import { Routes, Route } from 'react-router-dom';
import { AddNewCategory, AddNewProduct, ScanProduct, StockList } from './pages';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/addNewCategory" element={<AddNewCategory />}></Route>
        <Route path="/addNewProduct" element={<AddNewProduct barcode={123456788886} />}></Route>
        <Route path="/" element={<ScanProduct />}></Route>
        <Route path="/stockList" element={<StockList />}></Route>
      </Routes>
    </>
  );
};

export default App;
