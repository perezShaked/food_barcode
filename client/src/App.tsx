import { Routes, Route } from 'react-router-dom';
import { Home, AddNewCategory, AddNewProduct, ScanProduct, StockList } from './pages';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <h1>אפליקצייה לניהול המלאי במחסן</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addNewCategory" element={<AddNewCategory />}></Route>
        <Route path="/addNewProduct" element={<AddNewProduct />}></Route>
        <Route path="/scanProduct" element={<ScanProduct />}></Route>
        <Route path="/stockList" element={<StockList />}></Route>
      </Routes>
    </>
  );
};

export default App;
