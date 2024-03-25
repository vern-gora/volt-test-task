import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors.js';
import css from './TaskCounter.module.css';

const TaskCounter = () => {
    const tasks = useSelector(getTasks);

    const count = tasks.reduce(
        (acc, task) => {
            if (task.completed) {
                acc.completed += 1;
            } else {
                acc.current += 1;
            }
            return acc;
        },
        { current: 0, completed: 0 }
    );

    return (
        <div>
            <p className={css.text}>Current: {count.current}</p>
            <p className={css.text}>Completed: {count.completed}</p>
        </div>
    );
};

export default TaskCounter;
