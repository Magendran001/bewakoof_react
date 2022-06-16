
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Routeshandling from './components/routing/routes';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routeshandling/>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
