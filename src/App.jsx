

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";

import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, soy ItemListContainer!"/>
    </div>
  );
}

export default App;