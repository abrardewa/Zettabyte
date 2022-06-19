const students = [
    {
      id: "1",
      name: "Sherlock",
      score:90
    },
    {
      id: "2",
      name: "Genta",
      score: 75
    },
    {
      id: "3",
      name: "Ai",
      score: 80
    },
    {
      id: "4",
      name: "Budi",
      score:85
    }
  ]
  
  function result() {
    var sum=0;
    var rate=0;
    for (let i = 0; i < students.length; i++) {
        sum+=students[i].score;
        rate+=1;
    }
    var mean=sum/rate;
    var result=[];
    for (let i = 0; i < students.length; i++) {
        if(students[i].score>mean){
            result.push(students[i]);
        }
    }
    return result;
  }
  
  console.log(result());