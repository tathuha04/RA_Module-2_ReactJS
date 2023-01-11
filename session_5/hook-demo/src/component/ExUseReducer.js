import React, { useReducer } from 'react'
// state phức tạp
/*
student:{
    studentId,
    studentName,
    address:{
        city,
        provice...
    }
}
*/
// 1. khởi tạo reducer: state - cần thay đỏi , action - hành động để thay đổi state
const UP_ACTION = "up";
const DOWN_ACTION = "down"
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            return new Error("Action invalid");
    }
}
export default function ExUseReducer() {
    // useReducer (reducre,initState) : khai báo state và phương thức dispatch để bản action cập nhật state
    const [count, dispatch] = useReducer(reducer,0);
    return (
        <div>
            <h2>Rikkei Academy - React Hooks - uesReducer</h2>
            <p>Current Value: </p>
            <button onClick={()=>dispatch(UP_ACTION)}>Up</button>
            <button onClick={()=>dispatch(DOWN_ACTION)}>Down</button>

        </div>
    )
}
