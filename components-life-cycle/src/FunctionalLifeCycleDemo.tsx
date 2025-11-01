import { useEffect,useState } from "react";


const FunctionalLifeCycle: React.FC =()=>{
    const[count , setCount] = useState<number>(0);
    useEffect(()=> {
        console.log("Component Mounted");

        return()=>{
            console.log("Component Unmounted");
        };
    },[]);

    useEffect(() => {
        console.log("Component Updated: count change to", count);
    },[count]);

    return(
        <div>

            <h1>Functional Lifecycle Demo</h1>
            <p> Count: {count}</p>
            <button onClick={() => setCount((prev)=> prev + 1)}>Increment</button>
        </div>
    );
}

export default FunctionalLifeCycle;