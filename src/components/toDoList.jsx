import { useState } from 'react';
import TaskInput from './taskInput';
import TaskRow from './taskRow';

const ToDoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [repeated, setRepeated] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskList.includes(inputValue)) {
      setRepeated(true);
    } else {
      setRepeated(false);
      setTaskList([...taskList, inputValue]);
    }
  };

  return (
    <>
      <TaskInput handleChange={handleChange} handleSubmit={handleSubmit} />
      { repeated && <p>This task already exist</p> }
      <TaskRow taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};

export default ToDoList;
