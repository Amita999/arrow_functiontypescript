var myCourse = function (author, price) {
    if (author) {
        console.log(author);
    }
    ;
    if (price) {
        console.log(price);
    }
    ;
    return author;
};
myCourse('Amita', 250);
//Arrow function
var myCourse1 = function (author, price) {
    if (author) {
        console.log(author);
    }
    ;
    if (price) {
        console.log(price);
    }
    ;
    return author;
};
myCourse1('Naina', 350);
//mycourse and mycurse1 are function types
///without parameter
var myCourse2 = function () { return console.log('Hello'); };
myCourse2();
///////////////////returning with index of result
var userLocation;
(function (userLocation) {
    userLocation[userLocation["india"] = 0] = "india";
    userLocation[userLocation["usa"] = 1] = "usa";
    userLocation[userLocation["Nz"] = 2] = "Nz";
})(userLocation || (userLocation = {}));
;
function UserDetails() {
    var details = [
        {
            id: 1,
            name: 'Priyanka',
            location: userLocation.usa,
            avl: false
        },
        {
            id: 2,
            name: 'Neha',
            location: userLocation.india,
            avl: false
        },
        {
            id: 3,
            name: 'Raina',
            location: userLocation.Nz,
            avl: true
        }
    ];
    return details;
}
;
var storeDetails = UserDetails();
function getLocation(Area) {
    console.log("Country : " + Area); //returns index
    console.log("Country : " + userLocation[Area]); //reeturns value
    var userData = [];
    for (var _i = 0, storeDetails_1 = storeDetails; _i < storeDetails_1.length; _i++) {
        var s = storeDetails_1[_i];
        if (s.avl) {
            userData.push(s.id + " " + s.name);
            break;
        }
        ;
    }
    ;
    console.log(userData);
    return userData;
}
;
getLocation(userLocation.usa);
storeDetails.forEach(function (val, idx) { return console.log(idx + "-" + val); });
