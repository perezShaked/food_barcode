import { Home, AddNewCategory, AddNewProduct, ScanProduct, StockList } from './pages';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>אפליקצייה לניהול המלאי במחסן</h1>
      <Link to={'/'}>בית</Link>
      <br />
      <Link to={'/addNewCategory'}>קטגוריה חדשה</Link>
      <br />
      <Link to={'/addNewProduct'}>פריט חדש</Link>
      <br />
      <Link to={'/scanProduct'}>סרוק מוצר</Link>
      <br />
      <Link to={'/stockList'}>רשימת מלאי</Link>

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
