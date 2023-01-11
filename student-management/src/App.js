import './App.css';
import Control from './component/Control';
import Form from './component/Form';
import ListStudent from './component/ListStudent';
import { useEffect, useState } from 'react';

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [studentForm, setStudentForm] = useState();
  const [listStudent, setListStudent] = useState([
    {
      id: 1,
      code: 'SV001',
      name: 'Nguyễn Văn A',
      age: 20,
      gender: 'Nam'
    },
    {
      id: 2,
      code: 'SV002',
      name: 'Nguyễn Thị B',
      age: 21,
      gender: 'Nữ'
    },
    {
      id: 3,
      code: 'SV003',
      name: 'Nguyễn Văn C',
      age: 19,
      gender: 'Nam'
    },
    {
      id: 4,
      code: 'SV004',
      name: 'Nguyễn Thị D',
      age: 24,
      gender: 'Nữ'
    },
  ]);



  function handleToggle(status) {

    setToggleForm(status)
  };

  function student(student) {
    console.log('ffffff', student);
    setListStudent([...listStudent, student]);
  };

  function handleDelete(deleteStudent) {
    console.log(deleteStudent);
    let newData = listStudent.filter(student => deleteStudent !== student.code);
    console.log(newData);
    setListStudent(newData)
  };

  function handleShowStudent(student) {
    console.log(student);
    setStudentForm(student)
    setToggleForm(true)
  }

  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control handleToggle={handleToggle}></Control>

          <ListStudent listStudent={listStudent} handleDelete={handleDelete} handleShowStudent={handleShowStudent}></ListStudent>
        </div>
      </div>
      {toggleForm && <Form getForm={student} studentForm={studentForm}></Form>}
    </div>
  );
}

export default App;
