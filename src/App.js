
import './App.css';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <main>
        <ul>
          <li><NavBar /></li>
          <li><ItemListContainer greeting={"Bienvenidos"}/></li>
        </ul>
      </main>
    
    </div>
  );
}

export default App;
