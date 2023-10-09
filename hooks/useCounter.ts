import { useCallback, useMemo, useState } from "react";



const useCounter = (initialCount?:number) => {
    const [count, setCount] = useState(initialCount || 0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount +1)
    }, [])


    const decrement = useCallback(() => {
        setCount((prevCount) =>  {
            const newCount = prevCount - 1;

            if(newCount < 0) return prevCount;
            return newCount;
        })
    }, [])

    const reset = useCallback(() => setCount(0), [])

    const valeus = useMemo(() => ({
        increment,
        decrement,
        reset,
        count,
    }), [count, decrement, increment, reset])


    return valeus;
}

export default useCounter;