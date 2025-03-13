function display(value) {
    document.getElementById("display-box").value +=value;
}


function clearscreen(){
    document.getElementById("display-box").value="";
}

function calculation(){
    var x = document.getElementById("display-box").value
    var z = eval(x)
    document.getElementById("display-box").value=z
}


// Function to delete only the last character
function deleteLast() {
    let display = document.getElementById("display-box");
    display.value = display.value.slice(0, -1); // Removes last character
}



