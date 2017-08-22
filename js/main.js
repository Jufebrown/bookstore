var book1 = {
    "id": 1,
    "name": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowlings",
    "picture_url": "http://img.timeinc.net/time/2007/harry_potter/107_potter_tout.jpg",
    "price": 20,
    "selling_points": [
        "It’s become essentially a rite of passage into the adult world.",
        "The essential guide to wizardry.",
        "Ain't no such thing as halfway crooks. -Mob Deep"
    ]
}

var book2 = {
    "id": 2,
    "name": "I Can't Make This Up: Life Lessons",
    "author": "Kevin Hart",
    "picture_url": "http://t2.gstatic.com/images?q=tbn:ANd9GcQ8qJwviyteJwYP0WiKauFKgRaNMugz4KPyli4wv2EdpXWhoBcl",
    "price": 25,
    "selling_points": [
        "You like cheese without the corners, in other words you’ll never be a slice. -Kevin Hart",
        "Laughter is Good for the Soul",
        "Because Kevin Hart is HILARIOUS"
    ]
}

var book3 = {
     "id": 3,
     "name": "Book Three",
     "author": "Savvy Coders",
     "picture_url": "http://pngimg.com/uploads/book/book_PNG2111.png",
     "price": 199,
     "selling_points": [
       "This book is hardcover",
       "This is a best seller",
       "This book will make you money"
     ]
}

var music1 = {
  "id": 1,
  "name": "18 months",
  "author": "Calvin Harris",
  "picture_url": "https://bethlemondinea2media2014.files.wordpress.com/2014/12/calvin-harris-18-months-album-cover-i9.png",
  "price": 9.99,
  "selling_points": [
    "a life long project from award winning artist DJ Calvin Harris",
    "Summer has never been hotter with jams this sweet",
    "Good vibrations for every occasion"
  ]
}


$('#music1 .name').text(music1.name)
$('#music1 .author').text(music1.author)
$('#music1 .product-image').append("<img src='" + music1.picture_url + "'>")
$('#music1 .price').text("Price:" + music1.price)


var n = 0



$('#book3 .name').text("Name: " + book3.name)
$('#book3 .author').text("Author: " + book3.author)
$('#book3 .product-image').append("<img src='" + book3.picture_url + "'>")
$('#book3 .price').text("Price: " + book3.price)

while (n < book3.selling_points.length) {
  $('#book3 .feature-list ul').append("<li>" + book3.selling_points[n] + "</li>")
  n++
}

$('#music2 .name').text("Name: " + music2.name)
$('#music2 .author').text("Artist: " + music2.author)
$('#music2 .product-image').append("<img src='" + music2.picture_url + "'>")
$('#music2 .price').text("Price: $" + music2.price)

while (n < music2.selling_points.length) {
  $('#music2 .feature-list ul').append("<li>" + music2.selling_points[n] + "</li>")
  n++
}

while(n < music1.selling_points.length) {
  $('#music1 .feature-list ul').append("<li>" + music1.selling_points[n] + "</li>")
n++
}


