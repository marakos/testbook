import { createHashHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './rootReducer'
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
// Create history
export const history = createHashHistory();

// Define on your own as per requirment
const persistedState = loadState();


const store = createStore(
  createRootReducer(history), // Root reducer with router state
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  )
)

store.subscribe(throttle(() => {

  saveState({
    books: store.getState().books,
    
  });
 
  
}, 1000));

export default store;