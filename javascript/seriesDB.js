let series = [
    {title: "Sons of Anarchy",
     rating: 5,
     hasWatched: true
    },
    {title: "Friends",
    rating: 5,
    hasWatched: true
    },
    {title:"How I Met Your Mother",
    rating: 3,
    hasWatched: false
    },
    {title: "Community",
    rating: 4,
    hasWatched: false
    }
];

series.forEach(function(serie){
    if (serie.hasWatched) {
        console.log("You have watched " + "\"" + serie.title + "\"" + " - " + serie.rating + " stars");
    } else {
        console.log("You have not seen " + "\"" + serie.title + "\"" + " - " + serie.rating + " stars");
    }
});

// series.forEach (function(serie){
//     let result = "You have "; 
//     if (serie.hasWatched){
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }
//     result += "\"" + serie.title + "\" - ";
//     result += serie.rating + " stars";
//     console.log(result);
// });