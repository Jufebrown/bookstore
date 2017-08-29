var products = {
books: [
  {
    "id": 1,
    "productType": "books",
    "name": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowlings",
    "picture_url": "http://img.timeinc.net/time/2007/harry_potter/107_potter_tout.jpg",
    "price": 100,
    "selling_points": [
      "It’s become essentially a rite of passage into the adult world.",
      "The essential guide to wizardry.",
      "Ain't no such thing as halfway crooks. -Mob Deep"
    ]
  },
  {
    "id": 2,
      "productType": "books",
    "name": "I Can't Make This Up: Life Lessons",
    "author": "Kevin Hart",
    "picture_url": "https://prodimage.images-bn.com/pimages/9781501155581_p0_v2_s550x406.jpg",
    "price": 25,
    "selling_points": [
      "You like cheese without the corners, in other words you’ll never be a slice. -Kevin Hart",
      "Laughter is Good for the Soul",
      "Because Kevin Hart is HILARIOUS"
    ]
  },
  {
    "id": 3,
      "productType": "books",
    "name": "Book Three",
    "author": "Savvy Coders",
    "picture_url": "http://pngimg.com/uploads/book/book_PNG2111.png",
    "price": 199,
    "selling_points": [
      "This book is hardcover",
      "This is a best seller",
      "This book will make you money"
    ]
  },
],
 music: [
  {
    "id": 4,
      "productType": "music",
    "name": "18 months",
    "author": "Calvin Harris",
    "picture_url": "https://bethlemondinea2media2014.files.wordpress.com/2014/12/calvin-harris-18-months-album-cover-i9.png",
    "price": 9.99,
    "selling_points": [
      "a life long project from award winning artist DJ Calvin Harris",
      "Summer has never been hotter with jams this sweet",
      "Good vibrations for every occasion"
    ]
  },

  {
      "Id": 5,
    "productType": "music",

    "name": "Anti",
    "author": "Rihanna",
    "picture_url": "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
    "price": 10,
    "selling_points": [
      "She's Crazy, Sexy, and Cool",
      "Unique Sound",
      "Top Charted Artist",  ]
  }
]
}


var addToPage = function(productObj) {
  $('.content').append("<div>Name: " + productObj.name + "</div>")
    .append("<div>Author: " + productObj.author + "</div>")
    .append("<div>Price: " + productObj.price + "</div>")
    .append("<div><img src='" + productObj.picture_url + "'></div>")
    .append("<div class='feature-list'><ul></ul></div>")

    // loop over selling points with while
  // var n = 0
  // while (n < productObj.selling_points.length) {
  //   $('.content .feature-list ul:last').append("<li>" + productObj.selling_points[n] + "</li>")
  //   n++
  // }

  // loop over selling points with forEach
  productObj.selling_points.forEach(function(point) {
    $('.content .feature-list ul:last').append("<li>" + point + "</li>")
  })
}

// var m = 0
// while (m < products.length) {
//   addToPage(products[m])
//   m++
// }

var populatePage = function() {
for (var productType in products) {
for (var i = 0; i < products[productType].length; i++) {
  addToPage(products[productType][i])
};
};
};
populatePage()

// var count = 2;
//
// $("form").on("submit", function(event) {
//     event.preventDefault();
//
//     var data = $(this).serializeArray();
//     var formObject = {};
//
//     formObject.id = ++count;
//     data.forEach( function(field){
//         formObject[field.name] = field.value;
//     } );
//
//     addToPage(formObject);
// });

var formToObject = function(form) {
  var data = $(form).serializeArray();
  var formObject = {};
var productArray

  // formObject.id = products.length++; // measures the length of the global products array
  data.forEach( function(field){
      formObject[field.name] = field.value;
  } );


productArray = products [formObject.type]
formObject.id =  productArray.length + 1

return formObject
}

var emptyContent = function() {
  $('.content').empty(); // jQuery function that refreshes the #content div
}

var addFormObjToProducts = function(formObject) {
  var productType = formObject.type;
products[productType].push(formObject)
   // adds the new product to the global products array
}


$("form").on("submit", function(event) {
    event.preventDefault();

    var formObject = formToObject(this)
    emptyContent()
    addFormObjToProducts(formObject)
    populatePage()
});
