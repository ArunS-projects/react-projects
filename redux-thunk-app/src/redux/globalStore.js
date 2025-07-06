import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const globalStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
})

export default globalStore;