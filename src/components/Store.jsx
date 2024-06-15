import { create } from 'zustand';
const Store = (set) => ({
  count:0,
  addCount : () => {
    set((previousState) => {
      console.log(previousState);
      return { count: previousState.count+1}

    })
  },
  decreaseCount : () => {
    set((previousState) => {
      return {count: previousState.count-1}
    })
  },
  jumpCountTo : (num) => {
    set((previousState) => {
      return {count: previousState.count +parseInt(num)}
    })
  }
})

const useCounter = create(Store);
export default useCounter;