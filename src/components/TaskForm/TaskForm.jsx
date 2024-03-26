import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice.js';
import Button from '../Button/Button.jsx';
import css from './TaskForm.module.css';

const TaskForm = () => {
    const N = 50;

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        dispatch(addTask(form.elements.text.value));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.field}
                type="text"
                name="text"
                placeholder="Enter task text..."
                maxLength={N}
            />
            <Button type="submit">Add task</Button>
        </form>
    );
};

export default TaskForm;
