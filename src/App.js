import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Stack from './components/Stack';
import BuildApp from './components/BuildApp';
import BackedByBest from './components/BackedByBest';
import CreatorsPage from './components/CreatorsPage';
import NumbersTalk from './components/NumbersTalk';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BuildBrand from './components/BuildBrand';
import Revenue from './Revenue';
import AppxHome from './AppxHome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppxHome />
      <Revenue />
      <BuildBrand />
      <Stack />
      <NumbersTalk />
      <CreatorsPage />
      <BackedByBest />
      <FAQ />
      <BuildApp />
      <Footer />
    </div>
  );
}

export default App;
