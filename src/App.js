
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer";
import { Layout } from "./componentes/Layout";
import './index.css';
import {cartContext} from "./context/cartContext";



function App() {
  return (
    <cartContext.Provider value={[]}>
        <Layout>
          <ItemListContainer />
        </Layout>
    </cartContext.Provider>
          );
}

export default App;
