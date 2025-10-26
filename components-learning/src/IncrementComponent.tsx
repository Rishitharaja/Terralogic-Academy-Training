import React,{useState} from 'react';
 function IncrementComponent(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count +1);
    };
    const decrement=()=>{
        
        setCount( count>0 ? count -1:0);
        
    }

    return(
        <div>
            <p>
                count:{count}
            </p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
export default IncrementComponent;