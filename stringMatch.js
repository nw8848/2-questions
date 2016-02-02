function stringMatch(htmlString){
    //reg for left or  right tag
    var regAll = /<[/]?[a-zA-Z_0-9]+>/;
    //reg for left tag
    var regLeft = /<[a-zA-Z_0-9]+>/;
    //reg for right tag
    var regRigth = /<[/][a-zA-Z_0-9]+>/;
    //reg for tag element
    var regElm =  /[a-zA-Z_0-9]+/;

    //define a stack to store left tag
    var tagStack =new Array();

    //while loop for reading every tag then processing
    while(htmlString.match(regAll)!=null){
        var matchTag = htmlString.match(regAll);
        //if it is a left tag then push it into stack, and replace it from original string
        if(matchTag[0].match(regLeft)!=null){
            tagStack.push(matchTag[0]);
            htmlString=htmlString.replace(regAll,"_");
            //alert(htmlString);
        }else{
            //if stack is empty, then right tag is useless
            if(tagStack.length==0){
                alert("Expected # found " + matchTag[0]);
                return;
            }
            //if the last tag in the stack is fit for the current tag (right tag), then remove both of them
            if(tagStack[tagStack.length-1].match(regElm)[0]==matchTag[0].match(regElm)[0]){
                tagStack.pop();
                htmlString=htmlString.replace(regAll,"_");
                continue;
            }else {   // if they are not pair,then error
                alert("Expected" + "</" + tagStack[tagStack.length-1].match(regElm)[0]+"> found "+matchTag[0]);
                return;
            }
        }
    }
    //if stack is not empty and there is no right tag in the string, then error.
    if(tagStack.length!=0){
        alert("Expected" + "</" + tagStack[tagStack.length-1].match(regElm)[0]+"> found #");
        return;
    }
   //Correct
   alert( 'Correctly tagged paragraph');
   return;
}
