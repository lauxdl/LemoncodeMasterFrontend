console.log("************** DELIVERABLE 04 *********************");
/**
 *### 4. Read Books
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
 * Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
 * TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */
/**#### Opcional
 * Utiliza Typescript para añadir los tipos adecuados.
 */

interface Book {
    title: string;
    isRead: boolean;
}

type BookType = Book[];

function isBookReadTs(books: BookType, titleToSearch: string): boolean {
    
    for (const key in books) {
        if (Object.hasOwnProperty.call(books, key)) {
            let encuentra = (books[key].title == titleToSearch) ?  true : false;
            if (encuentra) { 
                return books[key].isRead; 
            } 
        }
    }
    return false;
}

const booksExample: BookType = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
  
console.log(isBookReadTs(booksExample, "Devastación")); // true
console.log(isBookReadTs(booksExample, "Canción de hielo y fuego")); // false
console.log(isBookReadTs(books, "Los Pilares de la Tierra")); // false