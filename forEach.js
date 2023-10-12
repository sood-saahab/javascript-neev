console.log("Using Inbuilt forEach Loop");

let colname=['Akshita','Joe','Bob','Rhishab'];
colname.forEach(function(val){
    console.log(val);
})

console.log("\nUsing Custom forEach Loop")

function customForEach(arr,callback)
{
    for(let i=0;i<arr.length;i++)
    {
     callback(arr[i],i,arr)
    }
}

let values=[1,2,3,45,6];
customForEach(values,function(val){
console.log(val)
});