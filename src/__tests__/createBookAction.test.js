import * as actions from '../../src/screens/createBook/actions'
import * as types from '../../src/screens/createBook/actionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const status="success"
    const payload={}
    
    const expectedAction = {
      type: types.CREATE_BOOK,
      status,
      payload
      
    }
    expect(actions.createNewBook({status,payload})).toEqual(expectedAction)
  })
})