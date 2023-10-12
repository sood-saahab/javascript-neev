console.log("Using Inbuilt Map function");

const empMap=new Map();
empMap.set('Name','Joe');
empMap.set('Email','joe@gmail.com');
empMap.set('Address','Chandigarh');

console.log(empMap);
console.log("Size of Map: ",empMap.size);



console.log("\nUsing Custom Map function")

let obj=[
{
    name:'Joe',
    email:'joe@gmail.com'
},
{
    name:'Bob',
    email:'bob@gmail.com'
}
]
    

function customMap(arr, callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], obj.name, obj));
    }
    return result;
}

let squared = customMap(obj, function(num) {
    console.log(num.name+' '+num.email);
});

