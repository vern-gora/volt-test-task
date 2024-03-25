import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
    { id: 0, text: 'drink a glass of water', completed: true },
    { id: 1, text: 'brush your teeth', completed: true },
    { id: 2, text: 'make a bed', completed: false },
    { id: 3, text: 'do exercises', completed: false },
    { id: 4, text: 'go to the store', completed: false },
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false,
                    },
                };
            },
        },
        deleteTask(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        },
    },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
