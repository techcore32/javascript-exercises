const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
const getTheTitles = function(a) {
return a.map(books =>  books.title);
};

getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
