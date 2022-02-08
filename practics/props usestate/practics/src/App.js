import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Students from './component/students';
import FromHandling from './component/fromHandling';
function App() {
 

  return (
    <div className="App">
     <Counter />
     <Students />
     <FromHandling />
    </div>
  );
}

export default App;
