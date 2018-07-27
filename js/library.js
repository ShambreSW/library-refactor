// Great, I have a book.  Now what?  I can see the function in the console, but when I pass in data, it's undefined.  I need to create an instance of my library by creating a Library object with a library object constructor.
var Library = function(bookObjects) {
  this.bookshelf = [];
}

    Library.prototype.addBook(book) {
      // this.addBookAjax();
      for (let i = 0; i < this.myBooksArray.length; i++) {
        let currentBook = this.myBooksArray[i];
        if (currentBook.title === book.title) {
          return false;
        }
      }

      this.myBooksArray.push(book);
      this.addBookAjax();
      this.updateLibrary();
      return true;
    }

    Library.prototype.removeBookByTitle(title) {
      for (let i = 0; i < this.myBooksArray.length; i++) {
        if (this.myBooksArray[i].title === title) {
          this.deleteBookAjax(this.myBooksArray[i]);
          this.myBooksArray.splice(i, 1);
          this.updateLibrary();
          return true;
        }
      }
      return false;
    }

    Library.prototype.removeBooksByAuthor(authorName) {
      let result = false;
      for (let i = this.myBooksArray.length - 1; i >= 0; i--) {
        if (this.myBooksArray[i].author === authorName) {
          this.deleteBookAjax(this.myBooksArray[i]);
          this.myBooksArray.splice(i, 1);
          this.updateLibrary();
        }
      }
      return true;
    }

    Library.prototype.getRandomBook() {
      if (this.myBooksArray.length == 0) {
        return null;
      } else {
        return this.myBooksArray[(Math.floor(Math.random() * this.myBooksArray.length))];
      }
      return true;
    }

    Library.prototype.getBookByTitle(title) {
      let tempArray = [];
      let pattern = new RegExp(title, "i");
      for (let i = 0; i < this.myBooksArray.length; i++) {
        if (pattern.test(this.myBooksArray[i].title)) {
          tempArray.push(this.myBooksArray[i]);
        }
      }
      return tempArray;
    }

    Library.prototype.getBooksByAuthor(authorName) {
      let tempArray = [];
      let pattern = new RegExp(authorName, "i");
      for (let i = 0; i < this.myBooksArray.length; i++) {
        if (pattern.test(this.myBooksArray[i].author)) {
          tempArray.push(this.myBooksArray[i]);
        }
      }
      return tempArray;
    }

    Library.prototype.addBooks(books) {
      if (!books.constructor === Array) {
        return null;
      }
      let count = 0;
      for (let i = 0; i < books.length; i++) {
        if (this.addBook(books[i])) {
          count++;
          // this.addBookAjax();
        }
      }
      return count;
    }

    Library.prototype.getAuthors() {
      let tempArray = [];
      for (let i = 0; i < this.myBooksArray.length; i++) {
        if (tempArray.indexOf(this.myBooksArray[i].author) === -1) {
          tempArray.push(this.myBooksArray[i].author);
        }
      }
      return tempArray;
    }

    Library.prototype.getRandomAuthorName() {
      if (this.myBooksArray.length == 0) {
        return [];
      } else {
        return this.myBooksArray[(Math.floor(Math.random() * this.myBooksArray.length))].author;
      }
    }

    Library.prototype.search(string) {
      return this.getBookByTitle(string).concat(this.getBooksByAuthor(string));
    }

// I also need to instantiate the instance of the Library I've created.
$(document).ready(function(){

});

var gLib = new Library();
