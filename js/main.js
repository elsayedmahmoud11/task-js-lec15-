// start counter section  
var counter = 0;

function incData(){
    counter++;
    document.getElementById("demo").innerHTML = counter;
}
function decData(){
    counter--;
    document.getElementById("demo").innerHTML = counter;
}
// end counter section  

// start dollar section
function convert(){
    var myInput = document.getElementById("myInput").value;
    var result = document.getElementById("result");

    if (isNaN(myInput)) {
        result.innerHTML = "Enter number not text"
    }
    else if (myInput<0) {
        result.innerHTML = "Enter postive number"
    }
    else if (myInput==0) {
        result.innerHTML = "Enter number rather than zero"
    }
    else {
        result.innerHTML = myInput *50 + " E.P";   
    }

    return false;
}
// start dollar section 
