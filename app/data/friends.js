// ===============================================================================
// DATA
// Below data will hold all of the friends we've made.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    "name": "QT Pie",
    "photo":"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg",
  	"scores":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  {
    "name": "Good Boy",
    "photo":"http://cdn.hercampus.com/s3fs-public/2015/09/18/Poodle.jpg",
  	"scores":[
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ]
  },
  {
    "name": "God of Death",
    "photo":"https://images2.alphacoders.com/139/13992.png",
  	"scores":[
      3,
      3,
      4,
      3,
      3,
      3,
      1,
      3,
      3,
      3
    ]
  },
  {
    "name": "Chris Hemsworth",
    "photo":"https://vignette4.wikia.nocookie.net/thor/images/a/a6/Chris-Hemsworth-2.jpg/revision/latest?cb=20131130154248",
  	"scores":[
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4
    ]
  },
  {
    "name": "Christian Bale",
    "photo":"http://www.myfilmviews.com/wp-content/uploads/2013/05/christian-bale-wallpaper1.jpg",
  	"scores":[
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "Donald Glover",
    "photo":"https://s-media-cache-ak0.pinimg.com/736x/56/87/c2/5687c218e77e08663ef4b7ca2e4f377a.jpg",
  	"scores":[
      "3",
      "1",
      "3",
      "3",
      "3",
      "5",
      "3",
      "3",
      "3",
      "3"
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
