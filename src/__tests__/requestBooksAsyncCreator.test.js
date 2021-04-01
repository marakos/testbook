import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/screens/home/actions'
import * as types from '../../src/screens/home/actionTypes'
import expect from 'expect' 
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const query="a";
describe('async actions', () => {
    
 
    
    var mock = new MockAdapter(axios);
 
    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet("http://localhost:5000/books").reply(200, {
        book:"a"
    });
   
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
  
    const expectedActions = [
      { type: types.REQUEST_BOOKS, query },
      { type: types.RECEIVE_BOOKS, status: "success" ,payload: {book:"a"}}
    ]
    const store = mockStore({ data: [] })
   
    return store.dispatch(actions.getBooks(query)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})