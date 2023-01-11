import React, { useState } from "react";

export default function ExUseState() {
    // khởi tạo giá trị state với hàm useState
    const [count, setCount] = useState(0);
    const arr = [2, 4, 6, 8];
    const [list, setList] = useState(arr);
    const handleRandom = () => {
        //thêm 1 giá trị random vào arr
        setList([...list, parseInt(Math.random() * 10)])
    }
    // khởi tạo State là một Object
    const [objState, setObjState] = useState({ count: 0, list: arr });
    const handleRandomObject = () => {
        setObjState({
            count: objState.count,
            list: [...objState.list, parseInt(Math.random() * 10)]
        })
    }
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - useState</h2>
            <p>Current value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <p>Current Array:{list.toString()} </p>
            <button onClick={handleRandom}>Random</button>


            <h2>Rikkei Academy - React Hooks - useState - Object</h2>
            <p>Current value: {objState.count}</p>
            <button onClick={() => setObjState({ count: objState.count + 1, list: objState.list })}>Up</button>
            <button onClick={() => setObjState({ count: objState.count - 1, list: objState.list })}>Down</button>
            <p>Current Array {objState.list.toString()} </p>
            <button onClick={handleRandomObject}>Random</button>
        </div>
    )
}