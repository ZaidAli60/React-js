import './App.css';
import MainContent from './component/mainContent/MainContent';
import Navbar from './component/navbar/Navbar';
import Time from './component/Time/Time';

function App() {

  return (
    <div className="App">
      <Time />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
