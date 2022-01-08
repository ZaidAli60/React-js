
// import Button from "./components/button";
import Counter from "./components/counter"

function App() {

  const sampleData = {
    name:"Zaid Ali",
    rollno:5096,
    section:"A"
  }
  const sampleData2 =["A","B","C"]
  const sampleData3 = "sampledata"

  return (
    <div className="App">
  
      <Counter Data={sampleData} Data2={sampleData2} Data3={sampleData3} />
    </div>
  );
}

export default App;
