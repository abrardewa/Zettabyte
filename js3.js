const source = [
    {
      id: "1",
      data: {
          first_name: "Rian",
          last_name: "Nugraha"
      },
      school: {
        id: "1",
        data: "PLMK-JKT"
      },
    },
    {
      id: "2",
      full_name: "Ari Santoso",
      school: {
        id: "1",
        short_name: "GRSR",
        data: "JKT"
      },
    },
    {
      id: "3",
      data: {
        first_name: "Rahman",
        last_name: "Sunggara"
    },
    school: {
        id: "1",
        short_name: "GELM",
        data: "JKT"
      },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "2",
            data: "PLMK-BDG"
        },
    },
  ]


  function result(num) {
    /* Name section*/ 
    var name=[];
    //get data fullname
    const fullname= num.map(function(data){
        var save=[];
        var name= data.full_name;
        var id= data.id;
        save.push(name);
        save.push(id);
        return save;
    });
    //getdata firstname and lastname
    const combineNameFirstPhase=num.map(function(data){
        var save=[];
        var get=data.data;
        var id=data.id;
        save.push(get);
        save.push(id);
        return save;
    });
    //remove undifined data from array fullname
    const resultsFullname = fullname.filter(element => {
        if(element[0]!==undefined){
            return element ;
        }
    });
    //remove undifined data from array combinename (firstname and lastname)
    var resultsCombineName = combineNameFirstPhase.filter(element => {
        if(element[0]!==undefined){
            return element ;
        }
    });
    //geting and combining first name and last name to be a fullname
    const combineNamePhaseTwo=resultsCombineName.map(function(data){
        for (let i = 0; i < data.length; i++) {
            if(i==0){
                var firstname=data[i].first_name;
                var lastname=data[i].last_name;
                var combine=firstname+" "+lastname;
            }else{
                var id=data[i];
            }
        }
        var save=[];
        save.push(combine);
        save.push(id);
        return save;
    });
    // //sign fullname to array name
    for (let i = 0; i < resultsFullname.length; i++) {
        name.push(resultsFullname[i]);
    }
    //sign combine name to array name
    for (let i = 0; i < combineNamePhaseTwo.length; i++) {
        name.push(combineNamePhaseTwo[i]);
    }
    //add value to new array with key 
    var saveName=[];
    for (let i = 0; i < name.length; i++) {
        var listName={
            id:name[i][1],
            name:name[i][0]
        }
        saveName.push(listName);
    }
    /*End Of Name Section*/
    /*School Section*/
    //get school data and id
    const getSchool=num.map(function(data){
        var save=[];
        var schoolSection=data.school;
        var id=data.id;
        save.push(schoolSection);
        save.push(id);
        return save;
    });
    //get schooldata with school id
    const getSchoolName=getSchool.map(function(data){
        var save=[];
        var savewithid=[];
        for (let i = 0; i < data.length; i++) {
            if(i==0){
                var schoolId=data[i].id;
                if(data[i].data.length==3){
                    var newdata=data[i].short_name+"-"+data[i].data;
                }
                else{
                    var newdata=data[i].data;
                }
                savewithid.push(newdata);
                savewithid.push(schoolId);
                save.push(savewithid);
            }
            else{
                save.push(data[i]);
            }
        }
        return save;
    });
    //add value to new array with key 
    var saveSchoolName=[];
    for (let i = 0; i < getSchoolName.length; i++) {
        for (let j = 0; j < getSchoolName[i].length; j++) {
            if(j==0){
                var listSchoolNameId={
                    school_name:getSchoolName[i][j][0],
                    school_id:getSchoolName[i][j][1]
                }
            }
        }
        var listSchool={
            id:getSchoolName[i][1],
            school:listSchoolNameId
        }
        saveSchoolName.push(listSchool);
    }
    //create list result if id same
    var saveCombineFirstPhase=[];
    for (let i = 0; i < saveSchoolName.length; i++) {
        for (let j = 0; j < saveName.length; j++) {
            if(saveSchoolName[i].id==saveName[j].id){
                var combineList={
                    name:saveName[j].name,
                    school:saveSchoolName[i].school
                }
                saveCombineFirstPhase.push(combineList);
            }
        }
    }
    var listFinal=[];
    for (let i = 0; i < saveCombineFirstPhase.length; i++) {
        if(saveCombineFirstPhase[i].school.school_id==1){
            var allList={
                name:saveCombineFirstPhase[i].name,
                school_name:saveCombineFirstPhase[i].school.school_name
            }
            listFinal.push(allList);
        }
    }
    /*End Of School Section*/
    return listFinal;
  }
  
  console.log(result(source));