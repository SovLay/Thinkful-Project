function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function countBorrowedBooks(acc, book) {
  return acc + (book.borrows[0].returned === false);
}

function getBooksBorrowedCount(books) {
  return books.reduce(countBorrowedBooks, 0);
}
function getMostCommonGenres(books) {
  const counts = books.map(book => book.genre).reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map(book => ({
    name: book.title,
    count: book.borrows.length
  })).sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors.map(author => {
    const authorBooks = books.filter(book => book.authorId === author.id);
    const totalBorrows = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: totalBorrows
    };
  }).sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
