import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './tasks/reducer';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    },
});

export default store;
