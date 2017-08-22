var book1 = {
    "id": 1,
    "name": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowlings",
    "picture_url": "http://img.timeinc.net/time/2007/harry_potter/107_potter_tout.jpg",
    "price": 100,
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
    "picture_url": "https://prodimage.images-bn.com/pimages/9781501155581_p0_v2_s550x406.jpg",
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

var music2 = {
    "name": "Anti",
    "author": "Rihanna",
    "picture_url": "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
    "price": 10,
    "selling_points": [
        "She's Crazy, Sexy, and Cool",
        "Unique Sound",
        "Top Charted Artist"
    ]
}

var n = 0

$('#book1 .name').text("Author: " + book1.name)
$('#book1 .author').text("Artist: " + book1.author)
$('#book1 .price').text("Price: " + book1.price)
$('#book1 .product-image').append("<img src='" + book1.picture_url + "'>")

$('#book2 .name').text("Author: " + book2.name)
$('#book2 .author').text("Artist: " + book2.author)
$('#book2 .price').text("Price: " + book2.price)
$('#book2 .product-image').append("<img src='" + book2.picture_url + "'>")

$('#book3 .name').text("Name: " + book3.name)
$('#book3 .author').text("Author: " + book3.author)
$('#book3 .product-image').append("<img src='" + book3.picture_url + "'>")
$('#book3 .price').text("Price: " + book3.price)

$('#music1 .name').text(music1.name)
$('#music1 .author').text(music1.author)
$('#music1 .product-image').append("<img src='" + music1.picture_url + "'>")
$('#music1 .price').text("Price:" + music1.price)

$('#music2 .name').text("Name: " + music2.name)
$('#music2 .author').text("Artist: " + music2.author)
$('#music2 .product-image').append("<img src='" + music2.picture_url + "'>")
$('#music2 .price').text("Price: $" + music2.price)

while (n < book3.selling_points.length) {
  $('#book1 .feature-list ul').append("<li>" + book1.selling_points[n] + "</li>")
  $('#book2 .feature-list ul').append("<li>" + book2.selling_points[n] + "</li>")
  $('#book3 .feature-list ul').append("<li>" + book3.selling_points[n] + "</li>")
  $('#music1 .feature-list ul').append("<li>" + music1.selling_points[n] + "</li>")
  $('#music2 .feature-list ul').append("<li>" + music2.selling_points[n] + "</li>")
  n++
}
