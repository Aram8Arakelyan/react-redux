import {applyMiddleware, combineReducers, createStore} from "redux";
import {currentUserData, currentUserReducer} from "./features/currentUser/currentUserSlice";
import {todosData, todosReducer} from "./features/todos/todosSlice";
import thunk from "redux-thunk";

// Middleware
const logger = (store) => (next) => (action) => {
    return next(action)
}

const store = createStore(combineReducers({
    todos: todosReducer,
    currentUser: currentUserReducer
}), {
    currentUser: currentUserData,
    todos: todosData,
}, applyMiddleware(thunk, logger));

export default store;