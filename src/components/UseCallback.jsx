import React, { useCallback, useState } from 'react'
import Child from './Child';

const UseCallback = () => {
    const[count1, setCount1] = useState(0);
    const[count2, setCount2] = useState(0);

    const memorizeSetCountOneFunc = useCallback(() => setCount1(count1 + 1), [count1]);
    const memorizeSetCountTwoFunc = useCallback(() => setCount2(count2 + 1), [count2]);


  return (
    <div>
        <h1>Use Callback Hook</h1>
        {count1} and {count2}<br />
        <Child text={'Button One'} onClick={memorizeSetCountOneFunc}/>
        <Child text={'Button Two'} onClick={memorizeSetCountTwoFunc}/>
    </div>
  )
}

export default UseCallback