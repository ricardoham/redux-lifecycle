import { combineReducers } from 'redux';
import fieldReducer from '../components/field-reducer';

const rootReducer = combineReducers({
  field: fieldReducer
});

export default rootReducer;
