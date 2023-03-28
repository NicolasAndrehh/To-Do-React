import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const TaskInput = ({ handleChange, handleSubmit }) => (
  <form action="" className="form-input" onSubmit={(e) => handleSubmit(e)}>
    <input type="text" placeholder="Add task" onKeyUp={(e) => handleChange(e)} />
    <button type="submit" className="submit-button">
      <FontAwesomeIcon icon={faCirclePlus} className="add-icon" />
    </button>
  </form>
);

TaskInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TaskInput;
