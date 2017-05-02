export function selectBook(book) {
  // selcectBook is an action creator - it need to return and action!
  // That is, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
