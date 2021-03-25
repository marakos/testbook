
  const advSearch= (state = {visibleComp: false}, action) => {
   
    switch (action.type) {
      case 'SHOW':
        return Object.assign({}, state, {
          visibleComp:!state.visibleComp
        })
      default:
        return state;
    }
  };

  export default advSearch;