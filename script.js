'use strict';


const searchInput = null;
const bookList = [
  {id: 1,
  author: 'Charles Dickens' ,
  title: 'Oliver Twist'},
  { id:2,
  author: 'WIlliam Shapespear',
  title: 'Hamlet'}
  ];  

function handleKeyPress(input) {
      /*Ta emot/läsa av värdet i input fältet
      Skicka värdet till searchBooks
      searchBooks returnerar en filtrerad lista
      Filtrerade listan skickas till renderBookList
    */
  searchBooks(input);
}

function searchBooks(searchTerm) {
  /* Loops igenom bookList
    För varje varva i loopen, ta det aktuella elementet (boken)
    Jämför titeln med söktermen
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
    Returnerar filteredList eller anropar renderBookList?
  */
  const filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase()) >= 0 ) {
      filteredList.push(bookList[0]);
    }
  }
  renderBookList(filteredList);
}

handleKeyPress('e');

function renderBookList(list){
  /* Element i HTML- listan visas eller döljs beroende på listans innehåll*/
  console.log(list)
}






/*


let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}
*/