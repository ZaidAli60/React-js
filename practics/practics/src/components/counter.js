import Button from "./button";
function Counter(props) {
    // console.log(props)
    return(
        <div className="App">
            
      <Button Data={props.Data} />
      <Button Data2={props.Data2} />
      <Button Data3={props.Data3}/>
        </div>
    )
}
export default Counter;