import { combineReducers } from 'redux';
import CommonReducer from './CommonReducer';
import LineWorkerReducer from './LineWorkerReducer';
import AdminReducer from './AdminReducer';

export default combineReducers({
    common: CommonReducer,
    lineWorker: LineWorkerReducer,
    admin: AdminReducer,
});