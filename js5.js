const users =
  "1(user_id) Bagas(name) Frontend(department) PLMK(school) 1(school_id), 2(user_id) Faisal(name) Frontend(department) PLMI(school) 2(school_id), 3(user_id) Surya(name) Backend(department) PLN(school) 3(school_id), 4(user_id) Ari(name) Backend(department) PTN(school) 4(school_id)";

function resultDev(data) {
    var word=data.split(", ");
    var splitValueKey=[];
    for (let i = 0; i < word.length; i++) {
        var valueAndKey=word[i].split(" ");
        splitValueKey.push(valueAndKey);
    }
    var splitsymbol=[];
    for (let i = 0; i < splitValueKey.length; i++) {
        var temp=[];
        for (let j = 0; j < splitValueKey[i].length; j++) {
           var splitsymbolfromword=splitValueKey[i][j].split("(");
           temp.push(splitsymbolfromword);
        }
        splitsymbol.push(temp);
    }
    var finalSplit=[];
    for (let i = 0; i < splitsymbol.length; i++) {
        for (let j = 0; j < splitsymbol[i].length; j++) {
            splitsymbol[i][j][1]= splitsymbol[i][j][1].replace(")","");
        }
    }
    var result=[];
    
    for (let i = 0; i < splitsymbol.length; i++) {
        var list={};
        for (let j = 0; j < splitsymbol[i].length; j++) {
            list[splitsymbol[i][j][1]]=splitsymbol[i][j][0];
        }
        result.push(list);
    }
    return result;
}

console.log(resultDev(users));