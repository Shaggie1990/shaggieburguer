import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/container/ItemDetailcontainer/ItemDetailcontainer';
import Cart from './components/Cart/Cart';
import CartContextProv from "./context/CartContext";
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:id" element={<ItemListContainer/>} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/*" element={<Navigate to="/" replace/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </CartContextProv>
  );
}

export default App;