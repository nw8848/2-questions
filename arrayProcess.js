
function arrayProcess(nestedArray){
    var processedArray = new Array();
    for(var i=0;i<nestedArray.length;i++){
        //if nestedArray[i] is Array then call function again.
        if(nestedArray[i] instanceof Array){
            processedArray = processedArray.concat(arrayProcess(nestedArray[i]))
        }else{//if nestedArray[i] is num then add it to array.
            processedArray.push(nestedArray[i]);
        }
    }
    console.log(processedArray)
    return processedArray;
}
