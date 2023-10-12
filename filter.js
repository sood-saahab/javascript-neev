const arr = [3,6,7,9,35,56,89,43,66,23,10,14];

console.log("Using filter method");

console.log("Number Greater than 40: "+arr.filter(item => item >40 == 0));

console.log("Using Custome made filter method");

function oddNumbers(array2,callback){
    let result = [];
    for(let i = 0 ;i< array2.length ;i++)
    {
        if(array2[i] % 2 == 1)
            result.push(array2[i]);
    }
   callback(result);
}

oddNumbers(arr,function(oddnum){
    console.log("Odd Numbers: ",oddnum);
})
