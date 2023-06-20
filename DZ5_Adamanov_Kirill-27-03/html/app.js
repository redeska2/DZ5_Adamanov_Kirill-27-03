function filterBooksByLetterU(...books) {
  const booksWithU = [];
  const otherBooks = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const words = book.split(" ");

    let containsU = false;
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (word.includes("у") || word.includes("У")) {
        containsU = true;
        break;
      }
    }

    if (containsU) {
      booksWithU.push(book);
    } else {
      otherBooks.push(book);
    }
  }

  console.log("Книги с буквой 'у':", booksWithU);
  console.log("Остальные книги:", otherBooks);
}

filterBooksByLetterU(
  "дюна", 
  "вини-пух", 
  "унесенный ветром", 
  "ленинград действует", 
  "война и мир", 
  "вий", 
  "материнское поле", 
  "унесенный ветром", 
  "Мастер и Маргарита", 
  "Улисс", 
  "Преступление и наказание"
);
