import Button from '../Button/Button.jsx';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/tasks/constants.js';
import { getStatusFilter } from '../../redux/tasks/selectors.js';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
    const filter = useSelector(getStatusFilter);

    return (
        <div className={css.wrapper}>
            <Button selected={filter === statusFilters.all}>All</Button>
            <Button selected={filter === statusFilters.active}>Current</Button>
            <Button selected={filter === statusFilters.completed}>
                Completed
            </Button>
        </div>
    );
};

export default StatusFilter;
