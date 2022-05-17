const books = [
    {title: 'Harry Potter and the Sorcerer Stone',
    author: 'Js Roullin',
    alreadyRead: true
},

{title:'Fantastic Beats',
author: 'JK Roullin',
alreadyRead: false 

}];

$('<ul>').css('list-style-type', 'none').appendTo('body');

for (let i = 0 ; i < books.length ; i++){
    $('<li>').addClass(`book${i}`).html( `${books[i].title} by ${books[i].author}`).appendTo('ul')}

    $('<img>').addClass('img0').attr('src','https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png').prependTo('.book0');
    $('<img>').addClass('img1').attr('src', 'https://www.booktopia.com.au/covers/big/9781408880715/0000/fantastic-beasts-where-to-find-them.jpg').prependTo('.book1')

    $('img').css({'position' : 'relative', 'right' : '20px', 'top' : '8px'})
    for (let i = 0 ; i < books.length ; i++) {
        if(books[i]. alreadyRead){
            image = '.img'+i;
            $(image).css('opacity', '.20');

        }
    }console.log(!books[0].alreadyRead)