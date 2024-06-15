import useCounter from "./Store"
function ConterDown(){
  const count = useCounter((state) => state.count)
  const decreaseCount = useCounter((state) => state.decreaseCount)
  const handleDecreaseCount = (e) =>{
    e.preventDefault
    decreaseCount()
  }
  return(
    <>
      <button onClick={handleDecreaseCount}>- the count is {count}</button>
    </>
  )
}
export default ConterDown