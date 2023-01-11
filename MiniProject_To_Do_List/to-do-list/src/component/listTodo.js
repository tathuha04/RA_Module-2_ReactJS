import { useState } from "react";

function ListToDo(props) {
    const handleToggle = (value) => {
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Danh sách công việc</th>
                        <th>Trạng thái công việc</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.listTodo.map((item) =>
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.status ? 'Done' : 'in progress'}</td>
                            <td>
                                <button id="delete">Xoá</button>
                                <button id="changeStatus" onClick={() => props.onChangeStatus(item.id, item.status)}>Thay đổi trạng thái</button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </>
    )
}
export default ListToDo;