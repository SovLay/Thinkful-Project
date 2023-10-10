function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((a, b) => {
        // the localeCompare() function compares two strings in the current locale
        // It returns a negative value if a comes before b, a positive value if a comes after b, and 0 if they are equal
        return a.name.last.localeCompare(b.name.last);
    });
}
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id) {
        total++;
      }
    });
  });
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];

  books.forEach(book => {
    if(book.borrows.find(borrow => borrow.id === account.id && !borrow.returned)) {
      book.author = authors.find(author => author.id === book.authorId);
      possessedBooks.push(book);
    }
  });

  return possessedBooks;
} {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
