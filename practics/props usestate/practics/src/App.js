import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Students from './component/students';
import FromHandling from './component/fromHandling';
import Student from './component/student';
function App() {
 

  return (
    <div className="App">
     <Counter />
     <Students />
     <FromHandling />
     <Student />
    </div>
  );
}

export default App;
