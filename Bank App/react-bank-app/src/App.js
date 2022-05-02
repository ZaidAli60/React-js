import './App.css';
import Footer from './component/footer/Footer';
import MainContent from './component/mainContent/MainContent';
import Navbar from './component/navbar/Navbar';
import Time from './component/Time/Time';

function App() {

  return (
    <div className="App">
      <Time />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
