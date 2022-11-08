
import './App.css';
import NavBar from "./componentes/NavBar";
import CartWidget from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <CartWidget />
        <ItemListContainer greeting={"Bienvenidos"}/>
      </main>
    
    </div>
  );
}

export default App;
