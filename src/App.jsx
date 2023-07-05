
import './App.css'
import Header from './components/header/NavBar'
import CartWidget from './components/header/CartWidget'
import ItemListContainer from './components/header/ItemListContainer'


function App() {
  
  return (
    <div>
      <Header logo= "Tienda Anime"/>
      <ItemListContainer/>
      <CartWidget/>
    </div>
  )
}

export default App;
