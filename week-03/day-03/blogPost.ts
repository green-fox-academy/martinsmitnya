
/*
Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
*/
/*
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.

"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.

"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
*/

class BlogPost {
  _authorName: string;
  _title: string;
  _text: string;
  _publicationDate: string;

  constructor (authorName: string, title: string, text: string, publicationDate:string){
    this._authorName = authorName;
    this._title = title;
    this._text = text;
    this._publicationDate = publicationDate;

  }

}

let pub1 = new BlogPost('John Doe', 'lorem ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04');
let pub2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let pub3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

console.log(pub1, pub2, pub3);