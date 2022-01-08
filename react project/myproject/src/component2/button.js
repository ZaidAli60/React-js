
function Button(props) {
    console.log("props", props)
    return (
        <div>
            <button style={{color:props.color}}>{props.title}</button>
            {/* <button>Learn HTML TAGS</button> */}
        </div>
    )
}
export default Button;
