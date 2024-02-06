var books = [180, 190, 400, 260, 115, 105];


for (var i = 0; i < books.length; i++) {
    var book = books[i];
    if (book > 200) {
        continue;
    }
    console.log(book)
}

