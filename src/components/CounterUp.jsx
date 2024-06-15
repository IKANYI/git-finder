import useCounter from "./Store"
function CounterUp(){
  const count = useCounter((state) => state.count)
  const addCount = useCounter((state) => state.addCount)
  const handleIncreaseCount = (e) => {
    e.preventDefault;
    addCount()
  }
  return(
    <>
      <button onClick={handleIncreaseCount}>+ the count is {count}</button>
    </>
  )
}
export default CounterUp