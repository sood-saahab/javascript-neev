let numbers = [54,87,3,67,90,65,3,5,23,87,44];

console.log("Using Reduce Method");

const sum = numbers.reduce(function (res, item) {
    return res + item;
},10);

console.log("Total: ",sum);

console.log("Using Custome made Reduce method");

function customeGetSum(array, initialValue = 0)
{
    let result = initialValue;
    for(let i = 0;i < array.length;i++)
    {
        result += array[i];
    }
    return result;
}

function customeReduce(myfunction, array) {
    let result = myfunction(array,10);
    return result;
}

console.log("Total: "+customeReduce(customeGetSum,numbers));