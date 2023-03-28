import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskRow = ({ taskList, setTaskList }) => {
  const [editRow, setEditRow] = useState();
  const [editMode, setEditMode] = useState(false);

  const deleteTask = (task) => {
    const newTaskList = taskList.filter((taskItem) => taskItem !== task);
    setTaskList(newTaskList);
  };

  const editTask = (taskIndex) => {
    setEditMode(!editMode);
    setEditRow(taskIndex);
  };

  const handleEdit = (taskIndex, newValue) => {
    const newTaskList = taskList;
    newTaskList[taskIndex] = newValue;
    setTaskList(newTaskList);
  };

  return (
    <>
      {taskList.map((task, index) => (
        <div className="task-row" key={task}>
          <div className="task-info">
            <input type="checkbox" name="" id="" />
            {editRow === index && editMode === true ? <input type="text" className="edit-input" onBlur={(e) => handleEdit(index, e.target.value)} /> : <p>{task}</p>}
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faPen} onClick={() => editTask(index)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task)} />
          </div>
        </div>
      ))}
    </>
  );
};

TaskRow.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setTaskList: PropTypes.func.isRequired,
};

export default TaskRow;
