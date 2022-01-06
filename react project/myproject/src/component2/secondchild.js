import Thirdchild from "./thirdchild";

function Secondchild() {
    return (
        <div>
          Secondchild
           <div>
           <Thirdchild />
           </div>
        </div>
    )
}

    export default Secondchild;