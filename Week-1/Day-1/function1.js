function findBig(a,b,c){
    //check if a is big
    if(a>b && b>c){
        return "a is big"
    }
    //check if b is big
    else if(b>c){
        return "b is big"
    }
    //c is big
    else{
        return "c is big"
    }
}

console.log(findBig(20,45,52))