import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { statusFilters } from './tasks/constants';
import { rootReducer } from './tasks/reducer';

// const initialState = {
//     tasks: [
//         { id: 0, text: 'q', completed: true },
//         { id: 1, text: 'qw', completed: true },
//         { id: 2, text: 'qwe', completed: false },
//         { id: 3, text: 'qwer', completed: false },
//         { id: 4, text: 'qwert', completed: false },
//     ],
//     filters: {
//         status: statusFilters.all,
//     },
// };

// const rootReducer = (state = initialState /*action*/) => {
//     return state;
// };

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
