import Button from '../Button/Button.jsx';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
    return (
        <div className={css.wrapper}>
            <Button>All</Button>
            <Button>Current</Button>
            <Button>Completed</Button>
        </div>
    );
};

export default StatusFilter;
