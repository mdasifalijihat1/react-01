import { useState } from "react"

export default function Count(){

    const [count, setCount] = useState(0);

    const handlerAdd = () =>{
        const newAdd = count + 1;
        setCount(newAdd)
    }

    const handlerAddDown = () => {
        const newDown = count - 1;
        setCount(newDown)
    }

  

    return(
        <div>
            <h3> add number {count}</h3>
            <button onClick={handlerAdd}> add </button>
            <button onClick={handlerAddDown }> Down </button>
        </div>
    )
}


  