const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    const sort= input.sort(function(a,b){return b-a})
  const mid= sort.length/2;
  if(mid%2!=0){
    var result=sort[mid];
  }
  else{
    var rounding=Math.round(mid);
    var result=(sort[rounding]+sort[rounding-1])/2;
  }
  return result;
}

console.log(result(input));