const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    var odd=[];
    var even=[];
    for (let i = 0; i < number.length; i++) {
        if(i%2==0){
            odd.push(number[i]);
        }
        else{
            even.push(number[i]);
        }
    }
    var result=[];
    result.push(odd);
    result.push(even);
  return result;
}

console.log(result(number));