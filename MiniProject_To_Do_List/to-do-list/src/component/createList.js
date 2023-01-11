import { useState } from "react";

function CreateList(props){
    const [value, setValue] = useState();
    return(
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input onChange={(e)=> setValue(e.target.value)} type="text" id="myInput" placeholder="Title..." />
            <span onClick={() => props.addValue(value)} className="addBtn">Add</span>
        </div>
    )
}
export default CreateList;