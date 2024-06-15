import { useState } from "react";
import useCounter from "./Store";
function JumpCountTo(){
  const jumpCountTo = useCounter((state)=>state.jumpCountTo)
  const [number, setNumber] = useState(0)
  const handleChangeNumber =(e) => {
    e.preventDefault();
    setNumber(e.target.value);
  }
  console.log(number)
  const handleJumpTo = (e) => {
    e.preventDefault();
    jumpCountTo(number)
  }
  return(
    <>
    <button onClick={handleJumpTo}>jump count to <input type="number" onChange={handleChangeNumber}/> </button>
    </>
  )
}
export default JumpCountTo