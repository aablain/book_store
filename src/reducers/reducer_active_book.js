// State argument is not application state,
// but only state  reducer is reposible for
export default function(state = null , action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}
