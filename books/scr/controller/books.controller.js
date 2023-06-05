const { Book } = require("../models/book");
let books  =  [new Book ( "EL SEÑOR DE LOS ANILLOS / LA COMUNIDAD DEL ANILLO","tapa dura", "J.R.R. Tolkien", 21.80 , "https://imagessl8.casadellibro.com/a/l/t7/98/9788445009598.jpg", 1, 10,),
new Book ( "EL SEÑOR DE LOS ANILLOS / LAS DOS TORRES", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl4.casadellibro.com/a/l/t7/04/9788445009604.jpg", 2, 20,),
new Book ( "EL SEÑOR DE LOS ANILLOS / EL RETORNO DEL REY", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl1.casadellibro.com/a/l/t7/11/9788445009611.jpg", 3, 30,),
new Book ( "ERAGON", "tapa dura", "Christopher Paolini", 13.25, "https://image.cdn1.buscalibre.com/60d16d138463b5601a8c4359.__RS360x360__.jpg", 5, 50,),
new Book ( "ELDEST", "tapa dura", "Christopher Paolini", 13.25, "https://m.media-amazon.com/images/P/B005WTVT4U.01._SCLZZZZZZZ_SX500_.jpg", 6, 60,),
new Book ( "BRISINGR", "tapa dura", "Christopher Paolini", 13.25, "https://imagessl8.casadellibro.com/a/l/t7/48/9788418850448.jpg", 7, 70,),
new Book ( "LEGADO", "tapa dura", "Christopher Paolini", 13.25, "https://books.google.es/books/content?id=yiuIRVnVDLkC&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0pyWaH0z-N2uwHudkcBCNSK0EDlQ&w=1280", 8, 80,)];

function getBooksId(request, response)
{   
    let id = request.params.id_book
    console.log(id)
    let respuesta;
    let book1 = books.find((book) => book.id_book == id)
    if (book1 != null || book1 === undefined || book1 === "")
    respuesta = book1;
    else 
    respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
    response.send(respuesta);
};
function getBooks(request, response)
{
    let respuesta;
    if (books.length>0)
    respuesta = books;
    else
    respuesta = {error: true, codigo: 200, mensaje: "No hay libros que mostrar"};

    response.send(respuesta);
};

function postBooks(request, response)
{
    let respuesta;
    console.log(request.body);
    
       let book     =new Book (request.body.title,
                    request.body.type,
                    request.body.author,
                    request.body.number,
                    request.body.photo,
                    request.body.id_book,
                    request.body.id_user)
        
        books.push(book)

        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro creado correctamente', data: book};
    


    response.send(respuesta);
};

function putBooks(request, response)
{
    let respuesta;
    let book = books.find((book)=> book.id_book == request.body.id_book);
    if (book)
    {
        book.title      =request.body.title;
        book.type       =request.body.type;
        book.author     =request.body.author;
        book.number     =request.body.number;
        book.photo      =request.body.photo;
        book.id_book    =request.body.id_book;
        book.id_user    =request.body.id_user;

        respuesta       = {error:false, codigo: 200,
                           mensaje:'Libro actualizado correctamente', data: book};
    }
    else    
        respuesta = {error: true, codigo: 200,
                    mensaje:'El libro no existe', data: book};

    response.send(respuesta);
};

function deleteBooks(request, response)
{
    let respuesta;
    let id = request.params.id_book;
    let filtrado = books.filter(book => book.id_book != id);
    if (filtrado.length != books.length) {
        books = filtrado;
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro borrado', data: filtrado}
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El libro no existe'};

        response.send(respuesta);
}


module.exports = {getBooks,getBooksId, postBooks, deleteBooks, putBooks}