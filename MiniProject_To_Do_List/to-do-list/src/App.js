
import { useState } from 'react';
import CreateList from './component/createList';
import ListToDo from './component/listTodo';
import './App.css';
function App() {
  const [listTodo, setListToDo] = useState([
    { title: 'Hit the gym', status: false, id: 1 },
    { title: 'Hit the', status: false, id: 2 },
    { title: 'Hit', status: false, id: 3 },
  ]);
  function addValue(list) {
    setListToDo([...listTodo, list]);
    console.log(listTodo);
  }
  function handleChangeStatus(id, status) {
    setListToDo((pre) => {
      console.log('pre', pre);
      const newData = listTodo.map(item => {

        if (item.id == id) {
          console.log('iddd', id, item.id, item.status);
          item.status = !status
          console.log(111323, item.status);
        }
        return item
      })
      return newData
    })

  }
  console.log(2222, listTodo);
  return (
    <>
      <CreateList addValue={addValue}></CreateList>
      <ListToDo listTodo={listTodo} onChangeStatus={handleChangeStatus}></ListToDo>
    </>

  );
}

export default App;
