let myCourse = function(author:string,price:number):string
{
    if(author){console.log(author)};
    if(price){console.log(price)};
    return author;

};

myCourse('Amita',250);
//Arrow function
let myCourse1 = (author:string,price:number):string=>
{
    if(author){console.log(author)};
    if(price){console.log(price)};
    return author;

};

myCourse1('Naina',350);

//mycourse and mycurse1 are function types
///without parameter
let myCourse2 = ()=>console.log('Hello');
myCourse2();
///////////////////returning with index of result

enum userLocation {'india','usa','Nz'};
function UserDetails()
{
     var details =
    [
        {
            id:1,
            name:'Priyanka',
            location:userLocation.usa,
            avl:false

        },
        {
            id:2,
            name:'Neha',
            location:userLocation.india,
            avl:false
        },
        {
            id:3,
            name:'Raina',
            location:userLocation.Nz,
            avl:true
        }
        ];
    return details;
};


var storeDetails = UserDetails();



function getLocation(Area:userLocation):Array<string>
{
    console.log(`Country : ${Area}`);//returns index
    console.log(`Country : ${userLocation[Area]}`);//reeturns value
    let userData:string[] = [];
   
    for(let s of storeDetails)
    {
        if(s.avl){
            userData.push(s.id+" "+s.name);
            break;
        };
        
    };
    console.log(userData);
    return userData;
};


let details1=getLocation(userLocation.usa);


details1.forEach((val,idx)=>console.log(idx + "-"+val));///////error error error
 