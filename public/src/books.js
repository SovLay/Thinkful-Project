function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
function findBookById(books, id) {
return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned === true);

  return [borrowed, returned];
}

// function getBorrowersForBook(book, accounts) {
//   // 1. Get the list of borrowers from the book object
//   // 2. For each borrower, find the matching account
//   // 3. Add the account to your result array
//   // 4. Sort the result array
//   // 5. Return the result array
// }
function getBorrowersForBook(book, accounts) {
const result = book.borrows.map(transaction => {
  const account = accounts.find(acc => acc.id === transaction.id);
  return {...transaction, ...account};
});

return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
