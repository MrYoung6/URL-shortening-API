import './App.css';
import Header from '../Components/Header/Header';
import TopInfo from '../Components/Header/Top Info/TopInfo';
import Shortener from '../Components/Header/Shortener/Shortener';
import Statistics from '../Components/Header/Statistics/Statistics';
import Boost from '../Components/Header/Boost/Boost'
import Footer from '../Components/Header/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopInfo />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
