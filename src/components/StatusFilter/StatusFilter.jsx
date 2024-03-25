import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice.js';
import Button from '../Button/Button.jsx';
import { statusFilters } from '../../redux/constants.js';
import { getStatusFilter } from '../../redux/selectors.js';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
    const filter = useSelector(getStatusFilter);

    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.current}
                onClick={() => handleFilterChange(statusFilters.current)}
            >
                Current
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};

export default StatusFilter;
