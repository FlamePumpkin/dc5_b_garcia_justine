

let i = prompt("Entrez un entier")
var bool

function integerOrNah(){
if (Number.isInteger(i)){
    bool = 1
} else {
    return false
}
}
function negOuPos(i){  
    if(i>=0 || bool==1){
        console.log("P")
    } else if (i<0 || bool==1){
        console.log("N")
    } else {
        return false
}
}

integerOrNah();
negOuPos(i);