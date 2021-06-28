import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

export interface State {
  router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  });
