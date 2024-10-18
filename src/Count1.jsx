import { useState } from "react"

export default function Count1(){

    const [count, setCount] = useState(0);
    const handlerNewAdd = () => {
        const newAdd0 = count + 1;
        setCount(newAdd0)
    }
    const handlerNewDwon = ()=>{
        const newDown = count - 1;
        setCount(newDown)

    }

    return(
        <div className="myClass">
            <h3> Im new count {count} </h3>
            <button onClick={handlerNewAdd}> Add new count </button>
            <button onClick={handlerNewDwon}> Down new </button>
        </div>
    )
}