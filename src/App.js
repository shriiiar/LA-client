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
import useData from './Hooks/getData';

function App() {

  const [data, setData] = useData();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home data={data}></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <SingleInventory></SingleInventory>
        </RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory data={data}></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
