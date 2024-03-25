import { statusFilters } from './constants';

const tasksInitialState = [
    { id: 0, text: 'drink a glass of water', completed: true },
    { id: 1, text: 'brush your teeth', completed: true },
    { id: 2, text: 'make a bed', completed: false },
    { id: 3, text: 'do exercises', completed: false },
    { id: 4, text: 'go to the store', completed: false },
];

export const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case 'tasks/addTask':
            return [...state, action.payload];
        case 'tasks/deleteTask':
            return state.filter(task => task.id !== action.payload);
        case 'tasks/toggleCompleted':
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                }
                return { ...task, completed: !task.completed };
            });
        default:
            return state;
    }
};

const filtersInitialState = {
    status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
        case 'filters/setStatusFilter':
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};
