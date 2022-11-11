
import './App.css';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";


function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListContainer greeting={"Shu Accesorios"}/>
        
      </main>
    
    </div>
  );
}

export default App;
