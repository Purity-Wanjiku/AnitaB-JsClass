let num = [10,20,3,8,7,9,12];
for(i = 0; i < num.length; i++){
// console.log(i);                     //returns the index of the elements
console.log("num",num[i]);            //return the elements in the array num
}

//iterate and break at the set condition
for (i = 0; i < num.length; i++){
    console.log({i});
    if (i === 3) {
        break;                    //stops the iteration when a certain condition is met
    }

    //console.log({i});  //here, it prints upto index 2
}

//continue the iteration past the condition
for (i = 0; i < num.length; i++){
    console.log("continued",i);      //console even index 3
    if (i === 3) {
        continue;                    //continues the iteration even when a certain condition is placed
    }
    //console.log("continued",i);     //when we console below the continue function, it skips index in the condition
}