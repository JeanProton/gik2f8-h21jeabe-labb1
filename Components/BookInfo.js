/*Utseende för rutan*/


const BookInfo = (book) => {
    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-12 rounded-md bg-white/40 p-4 w-1/5 top-20 ml-5 mx-auto 
    flex flex-col text-center text-gray-700 font-bold">
        <img src="${book.coverImage}" alt="Bokomslag saknas">
        
        <div class="border"></div>  
        <div class="detailed__list">
            <ul class="list">
                <li>Titel: ${book.title}</li>
                <li>Författare: ${book.author}</li>
                <li>Antal sidor: ${book.pages}</li>
                <li>Utgivningsdatum: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};