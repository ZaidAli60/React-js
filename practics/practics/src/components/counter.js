import Button from "./button";
function Counter(props) {
    // console.log(props)
    return(
        <div className="App">
            
      <Button Data={props.sampleData} />
      <Button Data2={props.sampleData2} />
      <Button Data3={props.sampleData3} />
        </div>
    )
}
export default Counter;