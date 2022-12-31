import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Login/Sign Up/Signup';
import Login from './Components/Login/Login/Login';
import Home from './Components/Pages/Home/Home';
import Inventory from './Components/Pages/Inventory/Inventory';
import SingleInventory from './Components/Pages/SingleInventory/SingleInventory';
import RequireAuth from './Components/Shared/RequiredAuth/RequiredAuth';
import ManageInventory from './Components/Pages/Manage Inventory/ManageInventory';
import AddInvertory from './Components/Pages/Add Invertory/AddInvertory';
import MyItems from './Components/Pages/My Items/MyItems';
import { useEffect } from 'react';
import Footer from './Components/Shared/Footer/Footer';
import ErrorRoute from './Components/Pages/Error-Route/ErrorRoute';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <SingleInventory></SingleInventory>
        </RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/addInventory' element={<RequireAuth>
          <AddInvertory></AddInvertory>
        </RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/banner' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<ErrorRoute></ErrorRoute>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
