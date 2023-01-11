import React from 'react'

function ListStudent(props) {
    console.log(props,1111111);
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {props.listStudent.map((student,i) => <tr>
                            <td>{i+1}</td>
                            <td>{student.code}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <div className="template-demo">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-icon-text"
                                        onClick={()=>props.handleShowStudent(student)
                                    }
                                    >
                                        Xem
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-icon-text"
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success btn-icon-text"
                                        onClick={()=>props.handleDelete(student.code)}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr> )}

                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListStudent;