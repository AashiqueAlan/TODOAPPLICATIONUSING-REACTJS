importReact, {useState} from 'react';
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
function App() {
const[ toDoList,setToDoList ] =useState(data);
const handleToggle = (id) => {
let mapped = toDoList.map(task => {
return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
});
setToDoList(mapped);
}
const handleFilter = () => {
letfiltered=toDoList.filter(task =>{
return !task.complete;
});
setToDoList(filtered);
}
constaddTask = (userInput )=>{
let copy = [...toDoList];
copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
setToDoList(copy);
}
return (
<div className="App">
<Header />
<ToDoList toDoList={toDoList} handleToggle={handleToggle}
handleFilter={handleFilter}/>
<ToDoForm addTask={addTask}/>
</div>
);
}
export default App;