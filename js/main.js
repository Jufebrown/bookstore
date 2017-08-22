var book1 = {
    "id": 1,
    "name": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowling",
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
     "selling-points": [
       "This book is hardcover",
       "This is a best seller",
       "This book will make you money"
     ]
}

var music1 = {
  "album name": "18 months",
  "artist": "Cavin Harris",
  "picture_url": "https://upload.wikimedia.org/wikipedia/en/d/df/Calvin_Harris_-_18_Months.png",
  "price": 9.99,
  "selling_points": [
    "a life long project from award winning artist DJ Calvin Harris",
    "Summer has never been hotter with jams this sweet",
    "Good vibrations for every occasion"
  ]
}


var music2 = {
    "album name": "Anti",
    "artist": "Rihanna",
    "picture_url": "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
    "price": 10,
    "selling_points": [
        "She's Crazy, Sexy, and Cool",
        "Unique Sound",
        "Top Charted Artist"
    ]
}

$('#book1 .name').text(book1.name)
$('#book1 .author').text(book1.author)
$('#book1 .picture_image img').attr("src='"+book1.picture_url + "'")
