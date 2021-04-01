import * as types from '../screens/home/actionTypes'
import advReducer from '../screens/home/reducers/advReducer'


describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(advReducer(undefined, {})).toEqual(
      {
        visibleComp: false,
      }
    )
  })

  it('should handle SHOW', () => {
    expect(
        advReducer([], {
        type: types.SHOW,
        
      })
    ).toEqual(
      {
        visibleComp: true
      }
    )

  })
})