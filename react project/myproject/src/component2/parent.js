import FirstChild from "./firstChild";
import Button from "./button";

function Parent() {
    return(
        <div>
          
          parent
         
            <div>
            <FirstChild />
            <Button color = "green" title="Learn HTML TAGS" />

            </div>
        </div>
    )
}
export default Parent;