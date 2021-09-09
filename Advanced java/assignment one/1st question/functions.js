const count =(array)=>{
const counts = {};
array.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
})
return counts
};


const mode=(array)=>{
    let c=count(array)
    var sortable = [];
    for (var key in c) {
        sortable.push([key, c[key]]);
    }
    
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    return sortable.pop()

}

//const arrAvg = (arr) => arr.reduce((a,b) => a + b, 0) / arr.length
const arithmetic = arr => 
{var min = arr[0];
    var max = arr[0];
    var average = 0;
    var i=0
    for(i in arr){
        if(arr[i] < min) min = arr[i];
      if(arr[i] > max) max = arr[i];
      average += arr[i];}   
    average /= arr.length;
    return [average,min,max]
}
//const 
exports.data={mode,count,arithmetic};




