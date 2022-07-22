
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListFilm from './components/ListFilms/ListFilms';
import CreditPacks from './components/MainContent/CreditPacks/CreditPacks';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <div className="Main-page">
  <Header/>
  <Banner/>
  <ListFilm/>
  <MainContent/>
  <CreditPacks/>
  <Footer/>
    </div>
  );
}

export default App;
