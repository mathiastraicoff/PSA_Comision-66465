
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <div>
      <Navbar 
        img={"https://semanadebuenosaires.org.ar/wp-content/uploads/sites/5/2019/10/PSA-Mejora-tu-vida.png"}
      />
      <ItemListContainer/>
    </div>
  )
}

export default App;



