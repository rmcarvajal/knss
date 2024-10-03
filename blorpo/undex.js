let blue = false
function changetitle(){
    if(blue){
        var element = document.getElementById("bng")
        element.innerHTML = "text change"
        element.className = "green"
        blue = false
    }
    else{
        var element = document.getElementById("bng")
        element.innerHTML = "text changed"
        element.className = "red"
        blue = true
    }
}
function addtext(){
    let inputelement = document.getElementById("Input")
    let value = inputelement.value
    if(value === ""){
        alert("add text")
    }
    else{
        let containerelement = document.getElementById("container")
        containerelement.innerHTML += "<p class='text'>" + value + "</p>"
        inputelement.value = ""
    }
}