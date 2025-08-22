import createSageMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { userReducer } from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSageMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
